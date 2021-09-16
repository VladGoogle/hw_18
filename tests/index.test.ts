import {UserDao} from "../db/user";
import {UserService} from "../user/services";
import {User} from "../db/models/user";
import {UserObj} from "../db/models/user"
const userService = new UserService();
const userDao = new UserDao();

const user = {
    name: "Vladislav",
    fullName: "Googlya",
    Age: 19,
    email: "tutut@gmail.com",
    password: "djdkjdk23"
};

const mockRegisterUser = jest.fn();
jest.mock('../db/user', () => {
    return {
        UserDao: jest.fn().mockImplementation(() => {
            return {registerUser: () => mockRegisterUser()};
        }),
    };
})




describe('Tests', () => {


    it('create user should call function with params', async()=>{
        const spy = jest.spyOn(User, "findAll").mockResolvedValue([]);
        const users = await User.findAll();
        expect(users).toEqual([]);
        expect(spy).toHaveBeenCalledWith();
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
    });

});