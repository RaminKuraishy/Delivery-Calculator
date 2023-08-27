import "./Form.scss";
import Select from "react-select";
function Form() {
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
  const rangeSlide = value => {
    const weight = document.querySelector(".weight-input");
    const range = document.querySelector(".input-range");
    weight.addEventListener("input", e => {
      range.value = e.target.value * 10;
    });
    range.addEventListener("input", e => {
      updateWeight(e.target.value);
      // console.log(e.target.value);
    });

    const updateWeight = currWeight => {
      currWeight = currWeight / 10;
      weight.value = currWeight;
    };
  };
  const getPriceBtn = event => {
    if (event.target.tagName === "BUTTON") {
      const buttons = document.querySelectorAll(".price-presets-btn");
      buttons.forEach(i => {
        buttons.forEach(btn => {
          btn.classList.remove("active-color");
        });
        event.target.classList.add("active-color");
      });
    }
  };

  return (
    <form action="#" className="delivery-form">
      <div className="input-wrapper">
        <h2 className="select-title">Країна відправки</h2>
        <Select
          options={options}
          defaultValue={{
            value: "Poland",
            label: "Польща",
          }}
          styles={selectStyles}
          onFocus={false}
        />
      </div>
      <div className="input-wrapper">
        <h2 className="input-title">
          Вага <span className="accent-color">(кг)</span>
        </h2>
        <input className="weight-input" defaultValue="0.5" type="text" />
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
            defaultValue="5"
            step="5"
            onChange={() => rangeSlide()}
          ></input>
        </div>
      </div>

      <div className="total-price">
        <h2 className="total-price-title">
          Приблизна вартість доставки (гривня)
        </h2>
        <p className="total-price-value">292₴</p>
        <p className="total-price-text">
          Дізнайся орієнтовну вартість доставки, вказавши основні дані про своє
          відправлення. Зверни увагу, що при сумарній вартості товарів понад 150
          євро, ти сплачуєш мито в розмірі 10% від суми + ПДВ (20% від суми
          товарів разом з митом).
        </p>
      </div>
      <div onClick={getPriceBtn} className="price-presets">
        <button className="price-presets-btn">Кросівки</button>
        <button className="price-presets-btn">Футболка</button>
        <button className="price-presets-btn">Сукня</button>
        <button className="price-presets-btn">Куртка осіння</button>
        <button className="price-presets-btn">Рушник</button>
        <button className="price-presets-btn">Блейзер</button>
        <button className="price-presets-btn">Рюкзак</button>
      </div>
    </form>
  );
}
export default Form;
