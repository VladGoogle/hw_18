const {User, userInfo} = require('../db/models')

const getUsersService = async () => {
    try {
        const data = await User.findAll({
            order: [["id", "ASC"]],
            attributes: ["email", "password"],
            include: [
                {
                    model: userInfo,
                    attributes: ["name", "fullName", "Age"],
                },
            ],
        });
        return data;
    } catch (err) {
        return err;
    }
};

const getUserByIdService = async (id) => {
    try {
        const data = await User.findOne({
            where: { id },
            attributes: ["email", "password"],
            include: [
                {
                    model: userInfo,
                    attributes: ["name", "fullName", "Age"],
                },
            ],
        });
        return data;
    } catch (err) {
        return err;
    }
};

const createUserService = async (user) => {
    try {
        const data = await User.create({ ...user });
        return data;
    } catch (err) {
        return err;
    }
};

const updateUserService = async (user, id) => {
    try {
        const data = await User.update({ ...user }, { where: { id } });
        return data;
    } catch (err) {
        return err;
    }
};

const deleteUserService = async (id) => {
    try {
        const data = await User.destroy({ where: { id } });
        return data;
    } catch (err) {
        return err;
    }
};

const deleteUsersService = async () => {
    try {
        const data = await User.destroy();
        return data;
    } catch (err) {
        return err;
    }
};

module.exports={
    getUsersService,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService,
    deleteUsersService
}








