import http from './../../api/http.service';
import Endpoints from './../../api/endpoints.constants';
import { UserModel } from '../models/UserModel';

export function getUsers() {
  return http
    .get(Endpoints.FETCH_USERS)
    .then(
      ({
        data: { data: users, total_pages: totalPages, page, per_page: perPage }
      }) => ({
        users: users.map(user => new UserModel(user)),
        page,
        perPage,
        totalPages
      })
    );
}
