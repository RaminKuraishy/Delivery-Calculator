import "./Form.scss";
function Form() {
  const rangeSlide = value => {
    const weight = document.querySelector(".weight-input");
    const range = document.querySelector(".input-range");
    weight.addEventListener("input", e => {
      range.value = e.target.value * 10;
    });
    range.addEventListener("input", e => {
      updateWeight(e.target.value);
    });

    const updateWeight = currWeight => {
      currWeight = currWeight / 10;
      weight.value = currWeight;
      // range.value = weight.value
    };
  };
  return (
    <form action="#" className="delivery-form">
      <div className="input-wrapper">
        <h2 className="select-title">Країна відправки</h2>
        <select className="form-country" name="country" id="">
          <option value="France">Франція</option>
          <option value="Poland" defaultValue>
            Польща
          </option>
          <option value="Germany">Німеччина</option>
        </select>
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
      <div className="price-presets">
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
