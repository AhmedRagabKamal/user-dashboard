export default {
  FETCH_USERS: (page, perPage) => `/users?page=${page}&per_page=${perPage}`,
  CREATE_USER: '/users'
};
