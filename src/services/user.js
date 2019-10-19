import { GITHUB_API_URL } from '../constants';
import http from './http';

export const fetchUser = ({ user }) => http.get(`${GITHUB_API_URL}/users/${user}`);
