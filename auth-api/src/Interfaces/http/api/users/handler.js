const AddUserUseCase = require('../../../../Applications/use_case/AddUserUseCase');

class UsersHandler {
  constructor(container) {
    this._container = container;

    this.postUserHandler = this.postUserHandler.bind(this);
  }

  async postUserHandler(req, res, next) {
    try {
      const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
      const addedUser = await addUserUseCase.execute(req.body);

      res.status(201).json({
        status: 'success',
        data: {
          addedUser,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsersHandler;
