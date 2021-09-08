import {UserDao} from '../db/user'
import {UserObj} from '../db/models/user'
import bcrypt from 'bcrypt'

export class UserService{
    private UserDao:UserDao;

    public async getUsers(){
        return await this.UserDao.getUsers();
    }

    public async getUserById(id:number){
        return await this.UserDao.getUserById(id);
    }

    public async getUserByEmail(email:string){
        return await this.UserDao.getUserByEmail(email);
    }

    public async registerUser(user:UserObj){
        user.password = await bcrypt.hash(user.password ,10)
        return await this.UserDao.registerUser(user);
    }

    public async updateUser(id:number, user:UserObj){
        return await this.UserDao.updateUser(id, user);
    }

    public async deleteUser(id:number){
        return await this.UserDao.deleteUser(id);
    }
}