import {UserService} from './services'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import {secret} from '../server'

export class UserController
{
    private UserService:UserService;

    public async getUsers(req, res){
        try {
            const data = await this.UserService.getUsers();
            res.send = {success: true, data};
            res.status = 200;
        } catch (error) {
            res.send = {success: false, error};
            res.status = 400;
        }
    };

    public async getUserById(req, res){
        try {
            const id = req.params.id;
            const data = await this.UserService.getUserById(id);
            res.send = {success: true, data};
            res.status = 200;
        } catch (error) {
            res.send = {success: false, error};
            res.status = 400;
        }
    };

    public async registerUser(req, res){
        try {
            const user = req.body;
            const data = await this.UserService.registerUser(user);
            res.send = {success: true, data};
            res.status = 200;
        } catch (error) {
            res.send = {success: false, error};
            res.status = 400;
        }
    };

    public async updateUser (req, res){
        try {
            const id = req.params.id
            const user = req.body;
            const data = await this.UserService.updateUser(id, user);
            res.send = {success: true, data};
            res.status = 200;
        } catch (error) {
            res.send = {success: false, error};
            res.status = 400;
        }
    };

   public async deleteUser(req, res){
        try {
            const id = req.params.id
            await this.UserService.deleteUser(id);
            res.send = {success: true, data: {message: "Deleted"}};
            res.status = 200;
        } catch (error) {
            res.send = {success: false, error};
            res.status = 400;
        }
    };

    public async loginUser(req,res)
    {
        const user = req.body;
        const userObj = await this.UserService.getUserByEmail(user.email);
        const {email, password, ...userInfo}=userObj;
        if(await bcrypt.compare(user.password, userObj.password))
        {
            res.body={
                token: jsonwebtoken.sign({
                    subject:userInfo,
                    data: {
                        user_id: userInfo.id
                    },
                    exp:Math.floor(Date.now()/1000)+ (60*60),
                }, secret)
            };
        }
    }

}



