const {
    getUsersService,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService,
    deleteUsersService
} = require('./service')

const getUsers = async (req,res) => {
    try {
        const data = await getUsersService();
        res.send = { success: true, data };
        res.status = 200;
    } catch (error) {
        res.send = { success: false, error };
        res.status = 400;
    }
};

const getUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await getUserByIdService(id);
        res.send = { success: true, data };
        res.status = 200;
    } catch (error) {
        res.send = { success: false, error };
        res.status = 400;
    }
};

const createUser = async (req,res) => {
    try {
        const user = req.body;
        const data = await createUserService(user);
        res.send = { success: true, data };
        res.status = 200;
    } catch (error) {
        res.send = { success: false, error };
        res.status = 400;
    }
};

const updateUser = async (req,res) => {
    try {
        const id = req.params
        const user = req.body;
        const data = await updateUserService(user, id);
        res.send = { success: true, data };
        res.status = 200;
    } catch (error) {
        res.send = { success: false, error };
        res.status = 400;
    }
};

const deleteUsers = async (req,res) => {
    try {

        await deleteUsersService();
        res.send = { success: true, data: { message: "Deleted" }};
        res.status = 200;
    } catch (error) {
        res.send = { success: false, error };
        res.status = 400;
    }
};

const deleteUser = async (req,res) => {
    try {
        const id= req.params.id
        await deleteUserService(id);
        res.send = { success: true, data: { message: `User with id: ${id} was deleted` }};
        res.status = 200;
    } catch (error) {
        res.send = { success: false, error };
        res.status = 400;
    }
};

module.exports={
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteUsers
}


