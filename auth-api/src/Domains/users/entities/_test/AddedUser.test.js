const AddedUser = require('../AddedUser');

describe('a AddedUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'dicoding',
      fullname: 'Dicoding Indonesia',
    };

    // Action and Assert
    expect(() => new AddedUser(payload)).toThrowError('ADDED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      username: 'dicoding',
      fullname: {},
    };

    // Action and Assert
    expect(() => new AddedUser(payload)).toThrowError('ADDED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create newUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'user-123',
      username: 'dicoding',
      fullname: 'Dicoding Indonesia',
    };

    // Action
    const addedUser = new AddedUser(payload);

    // Assert
    expect(addedUser.id).toEqual(payload.id);
    expect(addedUser.username).toEqual(payload.username);
    expect(addedUser.fullname).toEqual(payload.fullname);
  });
});
