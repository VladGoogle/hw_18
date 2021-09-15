const User= require('../db/models')
const UserDao = require('../db/user')

const user = {
    name: "Vladislav",
    fullName: "Googlya",
    Age: 19,
    email: "tutut@gmail.com",
    password: "djdkjdk23"
};

jest.mock('../db/models', () => ({
    UserDao: {
        registerUser: jest.fn(()=>user),
    },
}));

const {UserService} = require('../user/services');


describe('Payments: Create Refund function', () => {
    it('create refund should call cybersource function with params', async function (done) {

    });

    it('create refund should return id', async function (done) {

    });
});