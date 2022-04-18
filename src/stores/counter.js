import { observable, action, makeObservable } from "mobx";

export default class CounterStore {
  number = 0;

  constructor() {
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    });
  }

  increase = () => {
    this.number++;
  };

  decrease = () => {
    this.number--;
  };
}
