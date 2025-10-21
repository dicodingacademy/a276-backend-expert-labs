import AddUserUseCase from '../../../../Applications/use_case/AddUserUseCase.js';

class UsersHandler {
  constructor(container) {
    this._container = container;

    this.postUserHandler = this.postUserHandler.bind(this);
  }

  async postUserHandler(req, res) {
    const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
    const addedUser = await addUserUseCase.execute(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        addedUser,
      },
    });
  }
}

export default UsersHandler;
