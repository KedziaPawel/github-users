import User from 'types/user';

export interface State {
  readonly users: User[];
  readonly error: string | null;
  readonly fetching: boolean;
}
