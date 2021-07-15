const NewUser = require('../../Domains/users/entities/NewUser');

class AddedUserUseCase {
  constructor({ userRepository, encryptionHelper }) {
    this._userRepository = userRepository;
    this._encryptionHelper = encryptionHelper;
  }

  async execute(useCasePayload) {
    const newUser = new NewUser(useCasePayload);
    await this._userRepository.verifyAvailableUsername(newUser.username);
    newUser.password = await this._encryptionHelper.encryptPassword(newUser.password);
    return this._userRepository.addUser(newUser);
  }
}

module.exports = AddedUserUseCase;
