import client from './client';

interface IGetUsersParams {
  since?: number;
}

export const getUsers = (params?: IGetUsersParams) =>
  client.get('/users', { params });

export const getUser = (username: string) => client.get(`/users/${username}`);

export const getReposByUsername = (username: string) =>
  client.get(`/users/${username}/repos`);
