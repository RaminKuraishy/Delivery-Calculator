import { makeAutoObservable } from "mobx";

class Action {
  // totalPrice = "";
  multiplier = 10;
  weight = "0.5";
  rate = 1;

  multipliersByCountry = {
    France: 15,
    Poland: 10,
    Germany: 12,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setWeight(n) {
    const roundNum = num => {
      const remainder = num - Math.floor(num / 10) * 10;
      if (remainder == 0) {
        return num;
      } else if (remainder > 5) {
        return Math.ceil(num / 10) * 10;
      } else {
        return Math.floor(num / 10) * 10 + 5;
      }
    };

    let result = n;

    if (n.match(/\.\d+/) !== null) {
      result = roundNum(parseFloat(n) * 10) / 10;
    }
    // if (result === "0") {
    //   result = 0.5;
    // }
    if (parseFloat(result) > 30) {
      result = 30;
    }
    this.weight = result;
  }
  setCountry(country) {
    this.multiplier = this.multipliersByCountry[country];
  }
  get price() {
    return (
      (
        Math.round(
          (parseFloat(this.weight) * 8 * this.multiplier * this.rate) / 10
        ) || "-"
      ).toString() + " UAH"
    );
  }

  updateWeight(currWeight) {
    // currWeight = currWeight / 10;
    // this.totalWeight = currWeight;
  }
}

export default new Action();
