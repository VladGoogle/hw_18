import {UserDao} from "../db/user";
import {UserService} from "../user/services";

const user = {
    name: "Vladislav",
    fullName: "Googlya",
    Age: 19,
    email: "tutut@gmail.com",
    password: "djdkjdk23"
};

jest.mock('../db/user', () => {
    return {
        UserDao: jest.fn().mockImplementation(() => {
            return {registerUser: () => user};
        }),
    };
})


describe('Tests', () => {

    it('create user should call function with params', async()=>{
        const userService = new UserService();
        const userDao = new UserDao();
        await userService.registerUser(user)
        expect(userDao.registerUser).toBeCalled();
        expect(userDao.registerUser).toBeCalledWith(user);
    });

});