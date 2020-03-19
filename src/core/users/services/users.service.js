import http from './../../api/http.service';
import Endpoints from './../../api/endpoints.constants';
import { UserModel } from '../models/UserModel';

export function getUsers(page, perPage) {
  return http
    .get(Endpoints.FETCH_USERS(page, perPage))
    .then(
      ({
        data: { data: users, total_pages: totalPages, page, per_page: perPage }
      }) => ({
        data: users.map(user => new UserModel(user)),
        page,
        perPage,
        totalPages
      })
    );
}
