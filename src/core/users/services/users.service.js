import http from './../../api/http.service';
import Endpoints from './../../api/endpoints.constants';
import { UserModel } from '../models/UserModel';

export function getUsers() {
  return http.get(Endpoints.FETCH_USERS).then(res => {
    console.log(res);
  });
}
