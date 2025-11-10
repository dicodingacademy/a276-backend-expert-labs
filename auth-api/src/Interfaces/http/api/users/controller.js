import AddUserUseCase from '../../../../Applications/use_case/AddUserUseCase.js';

class UsersController {
  constructor(container) {
    this._container = container;

    this.postUser = this.postUser.bind(this);
  }

  async postUser(req, res) {
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

export default UsersController;
