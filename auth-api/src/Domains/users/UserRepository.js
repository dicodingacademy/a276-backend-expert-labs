class UserRepository {
  async addUser(registerUser) { // eslint-disable-line no-unused-vars
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async verifyAvailableUsername(username) { // eslint-disable-line no-unused-vars
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getPasswordByUsername(username) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

export default UserRepository;
