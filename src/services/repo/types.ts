import Repo from 'types/repo';

export interface State {
  readonly repos: Repo[];
  readonly error: string | null;
  readonly fetching: boolean;
}
