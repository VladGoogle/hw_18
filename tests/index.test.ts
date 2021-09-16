import {UserDao} from "../db/user";
import {UserService} from "../user/services";
import {User} from "../db/models/user";
//import {UserObj} from "../db/models/user"



const user = [{
    name: "Vladislav",
    fullName: "Googlya",
    Age: 19,
    email: "tutut@gmail.com",
    password: "djdkjdk23"
}] as User[];

const user1 = {
    name: "Vladislav",
    fullName: "Googlya",
    Age: 19,
    email: "tutut@gmail.com",
    password: "djdkjdk23"
} as User;

const user2 = {
    name: "Vladislav",
    fullName: "Googlya",
    Age: 19,
    email: "tutut@gmail.com",
    password: "djdkjdk23"
};

const id =1;
const email = "vlad@gmail.com"




const mockRegisterUser = jest.fn();
jest.mock('../db/user', () => {
    return {
        UserDao: jest.fn().mockImplementation(() => {
            return {registerUser: mockRegisterUser};
        }),
    };
})

/*const mockGetUsers = jest.fn();
jest.mock('../db/user', () => {
    return {
        UserDao: jest.fn().mockImplementation(() => {
            return {getUsers: mockGetUsers};
        }),
    };
})*/




describe('Tests', () => {
    let userService: UserService;

    beforeAll(() => {
        userService = new UserService();
    })


    afterEach(() => {
        jest.clearAllMocks();
    });


    /*it('createUser should call function with params', async()=>{
        await userService.regUser(user1);
        expect(mockRegisterUser).toHaveBeenCalledWith(user1);
    });

    /*it('createUser should call function with params', async()=>{
        await userService.getUsers();
        expect(mockGetUsers).toHaveBeenCalledWith();
    });*/


        it('getUsers should call function with params', async()=>{
            const spy = jest.spyOn(userService, "getUsers").mockResolvedValue(user);
            const users = await userService.getUsers();
            expect(users).toEqual(user);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });

    it('createUser should call function with params', async()=>{
        const spy = jest.spyOn(userService, "regUser").mockResolvedValue(user1);
        const users = await userService.regUser(user1);
        expect(users).toEqual(user1);
        expect(spy).toHaveBeenCalledWith(user1);
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
    });

    it('updateUser should call function with params', async()=>{
        const spy = jest.spyOn(userService, "updateUser").mockResolvedValue(user1);
        const users = await userService.updateUser(id,user1);
        expect(users).toEqual(user1);
        expect(spy).toHaveBeenCalledWith(id,user1);
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
    });

    it('deleteUser should call function with params', async()=>{
        const spy = jest.spyOn(userService, "deleteUser").mockResolvedValue();
        await userService.deleteUser(id);
        expect(spy).toHaveBeenCalledWith(id);
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
    });

    it('getUserById should call function with params', async()=>{
        const spy = jest.spyOn(userService, "getUserById").mockResolvedValue(user1);
        const users = await userService.getUserById(id);
        expect(users).toEqual(user1);
        expect(spy).toHaveBeenCalledWith(id);
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
    });

    it('getUserByEmail should call function with params', async()=>{
        const spy = jest.spyOn(userService, "getUserByEmail").mockResolvedValue(user1);
        const users = await userService.getUserByEmail(email);
        expect(users).toEqual(user1);
        expect(spy).toHaveBeenCalledWith(email);
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
    });



});