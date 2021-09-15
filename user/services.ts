import {UserDao} from '../db/user'
import {UserObj} from '../db/models/user'
import bcrypt from 'bcrypt'

export class UserService{
    private userDao = new UserDao();

    public async getUsers(){
        return await this.userDao.getUsers();
    }

    public async getUserById(id:number){
        return await this.userDao.getUserById(id);
    }

    public async getUserByEmail(email:string){
        return await this.userDao.getUserByEmail(email);
    }

    public async registerUser(user:UserObj){
        user.password = await bcrypt.hash(user.password ,10)
        return await this.userDao.registerUser(user);
    }

    public async updateUser(id:number, user:UserObj){
        return await this.userDao.updateUser(id, user);
    }

    public async deleteUser(id:number){
        return await this.userDao.deleteUser(id);
    }
}