const RegisterUser = require('../../Domains/users/entities/RegisterUser');

class AddUserUseCase {
  constructor({ userRepository, encryptionHelper }) {
    this._userRepository = userRepository;
    this._encryptionHelper = encryptionHelper;
  }

  async execute(useCasePayload) {
    const registerUser = new RegisterUser(useCasePayload);
    await this._userRepository.verifyAvailableUsername(registerUser.username);
    registerUser.password = await this._encryptionHelper.encryptPassword(registerUser.password);
    return this._userRepository.addUser(registerUser);
  }
}

module.exports = AddUserUseCase;
