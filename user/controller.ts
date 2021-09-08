import {UserService} from './services'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import {secret} from '../server'


export class UserController
{
    private UserService = new UserService();

    public async getUsers(req:any, res:any){
        try {
            const data = await this.UserService.getUsers();
            res.send = {success: true, data};
            res.status = 200;
        } catch (error) {
            res.send = {success: false, error};
            res.status = 400;
        }
    };

    public async getUserById(req:any,res:any){
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

    public async registerUser(req:any,res:any){
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

    public async updateUser (req:any,res:any){
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

   public async deleteUser(req:any,res:any){
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

    public async loginUser(req:any,res:any)
    {
        const user = req.body;
        const userObj = await this.UserService.getUserByEmail(user.email);
        if(userObj === null)
        {
            throw "User does not exist"
        }
        else {
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
                    }, secret as string)
                };
            }
        }

    }

}



