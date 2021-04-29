const user = require('../usuarioTest')
jest.mock('../usuarioTest')

test("uses Mock User", () =>{
    expect(user.name).toBe("Mock User")
});