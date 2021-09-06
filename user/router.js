const express = require('express');
const app = express();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteUsers
} = require('./controller')

app.get('/users/getList', async function (req, res) {
    await getUsers(req, res);
})

app.get('/users/getById/:id', async function (req, res) {
    await getUserById(req, res);
})

app.post('/users/createUser', async function (req, res) {
    await createUser(req, res);
})

app.put('/users/updateUser', async function (req, res) {
    await updateUser(req, res);
})

app.delete('/users/deleteUser/:id', async function (req, res) {
    await deleteUser(req, res);
})

app.delete('/users/deleteUsers', async function (req, res) {
    await deleteUsers(req, res);
})



