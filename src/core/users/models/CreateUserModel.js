import { get } from 'lodash-es';

export class CreateUserModel {
  constructor(user = {}) {
    this.firstName = get(user, 'first_name', '');
    this.lastName = get(user, 'last_name', '');
    this.email = get(user, 'email', '');
    this.avatar = get(user, 'avatar', '');
    this.job = get(user, 'job', '');
    this.password = get(user, 'password', '');
    this.confirmPassword = get(user, 'confirmPassword', '');
    this.streetAddress = get(user, 'streetAddress', '');
    this.pinLocation = get(user, 'pinLocation', '');
    this.address = {
      streetAddress: get(user, 'streetAddress', ''),
      pinLocation: get(user, 'pinLocation', '')
    };
  }
}
