import * as types from "./actionTypes";

export function counterAction() {
  return { type: types.INCREMENT };
}

export function counterActionDec() {
  return { type: types.DECREMENT };
}
