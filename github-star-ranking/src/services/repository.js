import { GITHUB_API_URL } from '../constants';
import http from './http';

export const fetchReposByUser = ({ user, sort, direction = 'asc' }) => http.get(`${GITHUB_API_URL}/users/${user}/repos`, {
  params: { sort, direction },
});
