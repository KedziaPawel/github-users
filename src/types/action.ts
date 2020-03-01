export interface Action<T = string> {
  type: T;
  payload: any;
}
