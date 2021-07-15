const NewUser = require('../NewUser');

describe('a NewUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'abc',
      password: 'abc',
    };

    // Action and Assert
    expect(() => new NewUser(payload)).toThrowError('NEW_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      username: 123,
      fullname: true,
      password: 'abc',
    };

    // Action and Assert
    expect(() => new NewUser(payload)).toThrowError('NEW_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when username contains more than 50 character', () => {
    // Arrange
    const payload = {
      username: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
      fullname: 'Dicoding Indonesia',
      password: 'abc',
    };

    // Action and Assert
    expect(() => new NewUser(payload)).toThrowError('NEW_USER.USERNAME_LIMIT_CHAR');
  });

  it('should throw error when username contains restricted character', () => {
    // Arrange
    const payload = {
      username: 'dico ding',
      fullname: 'dicoding',
      password: 'abc',
    };

    // Action and Assert
    expect(() => new NewUser(payload)).toThrowError('NEW_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
  });

  it('should create newUser object correctly', () => {
    // Arrange
    const payload = {
      username: 'dicoding',
      fullname: 'Dicoding Indonesia',
      password: 'abc',
    };

    // Action
    const { username, fullname, password } = new NewUser(payload);

    // Assert
    expect(username).toEqual(payload.username);
    expect(fullname).toEqual(payload.fullname);
    expect(password).toEqual(payload.password);
  });
});
