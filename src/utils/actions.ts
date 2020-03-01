import { Action } from 'types/action';

export const createAction = (type: string) => (payload: any): Action => ({
  type,
  payload,
});
