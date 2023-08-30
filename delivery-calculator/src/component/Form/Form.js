import "./Form.scss";
import Select from "react-select";
import action from "../../store/action";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
const Form = observer(() => {
  useEffect(() => {
    fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=usd"
    )
      .then(res => res.json())
      .then(data => {
        action.rate = data[0].rate;
      });
  }, []);

  const options = [
    {
      value: "France",
      label: "Франція",
    },
    {
      value: "Poland",
      label: "Польща",
    },
    {
      value: "Germany",
      label: "Німеччина",
    },
  ];
  const setCountry = e => {
    action.setCountry(e.value);
  };
  const changeWeight = e => {
    e.target.value = e.target.value.replace(",", ".");
    e.target.value = e.target.value.replace(/[^0-9\.]+/, "");
    const buttons = document.querySelectorAll(".price-presets-btn");
    buttons.forEach(btn => {
      btn.classList.remove("active-color");
    });
    action.setWeight(e.target.value);
  };
  const selectStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: "#f6f6f9",
      border: "0",
      padding: "3px 0 0 7px",
      boxShadow: "none",
      outline: "none",
    }),
    option: styles => {
      return {
        ...styles,
        " &:hover": { color: "#da291c" },
        color: "#000",
        backgroundColor: "#F6F6F9",
        border: "none",
        outline: "none",
      };
    },
    dropdownIndicator: base => ({
      ...base,
      "&:hover": { color: "#da291c" },
    }),
  };

  const rangeSlide = e => {
    action.setWeight((parseInt(e.target.value) / 10).toString());
    const buttons = document.querySelectorAll(".price-presets-btn");
    buttons.forEach(btn => {
      btn.classList.remove("active-color");
    });
  };

  const getPriceBtn = event => {
    if (event.target.tagName === "BUTTON") {
      action.setWeight(event.target.dataset["weight"]);
      const buttons = document.querySelectorAll(".price-presets-btn");
      buttons.forEach(btn => {
        btn.classList.remove("active-color");
      });
      event.target.classList.add("active-color");
    }
  };
  return (
    <form action="#" className="delivery-form">
      <div className="input-wrapper">
        <h2 className="select-title">Країна відправки</h2>
        <Select
          options={options}
          defaultValue={options[1]}
          styles={selectStyles}
          onFocus={false}
          onChange={setCountry}
        />
      </div>
      <div className="input-wrapper">
        <h2 className="input-title">
          Вага <span className="accent-color">(кг)</span>
        </h2>
        <input
          className="weight-input"
          value={action.weight}
          onChange={changeWeight}
        />
      </div>
      <div className="range">
        <div className="slider-weight">
          <p className="slider-text">0 кг</p>
          <p className="slider-text">30 кг</p>
        </div>
        <div className="range-field">
          <input
            className="input-range"
            type="range"
            min="5"
            max="300"
            step="5"
            value={action.weight * 10}
            onChange={rangeSlide}
          ></input>
        </div>
      </div>

      <div className="total-price">
        <h2 className="total-price-title">
          Приблизна вартість доставки (гривня)
        </h2>
        <p className="total-price-value">{action.price}</p>

        <p className="total-price-text">
          Дізнайся орієнтовну вартість доставки, вказавши основні дані про своє
          відправлення. Зверни увагу, що при сумарній вартості товарів понад 150
          євро, ти сплачуєш мито в розмірі 10% від суми + ПДВ (20% від суми
          товарів разом з митом).
        </p>
      </div>
      <div onClick={getPriceBtn} className="price-presets">
        <button className="price-presets-btn" data-weight="1.5">
          Кросівки
        </button>
        <button className="price-presets-btn" data-weight="0.4">
          Футболка
        </button>
        <button className="price-presets-btn" data-weight="0.7">
          Сукня
        </button>
        <button className="price-presets-btn" data-weight="2.3">
          Куртка осіння
        </button>
        <button className="price-presets-btn" data-weight="0.8">
          Рушник
        </button>
        <button className="price-presets-btn" data-weight="1.1">
          Блейзер
        </button>
        <button className="price-presets-btn" data-weight="1.6">
          Рюкзак
        </button>
      </div>
    </form>
  );
});
export default Form;
