import { get } from 'lodash-es';

export class UserModel {
  constructor(user = {}) {
    this.id = get(user, 'id');
    this.firstName = get(user, 'first_name', '');
    this.lastName = get(user, 'last_name', '');
    this.email = get(user, 'email', '');
    this.avatar = get(user, 'avatar', '');
  }
}
