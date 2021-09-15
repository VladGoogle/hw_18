import {User, UserObj} from '../db/models/user'
import fetch from 'node-fetch';



export class UserDao {

    public async getUsers(): Promise<User[]> {

        const data = await User.findAll({
            order: [["id", "ASC"]],
            attributes: ["name", "fullName", "Age", "email", "password"],
        })
        return data;
    };

    public async getUserById(id:number): Promise<User | null> {

        const data = await User.findOne({
            where: {id: id},
            attributes: ["name", "fullName", "Age", "email", "password"]
        })
        return data;
    };

    public async getUserByEmail(email:string): Promise<User | null> {

        const data = await User.findOne({
            where: {email: email},
            attributes: ["id","name", "fullName", "Age", "password"]
        })
        return data;
    };

    public async registerUser(user:UserObj): Promise<User | null> {

        const data = await User.create({
            name:user.name,
            fullName: user.fullName,
            Age: user.Age,
            email: user.email,
            password: user.password
        });
        return data;
    };

    public async updateUser(id: number, user:UserObj): Promise<User> {

        const userObj = await this.getUserById(id)
        if(userObj === null)
        {
            throw "User does not exist"
        }
        else {
            const data = await userObj.update({
                name:user.name,
                fullName: user.fullName,
                Age: user.Age,
                email: user.email,
                password: user.password
            });
            return data;
        }

    };

    public async deleteUser(id: number): Promise<void> {
        const userObj = await this.getUserById(id)
        if(userObj === null)
        {
            throw "User does not exist"
            return
        }
        else {
            const data = await userObj.destroy();
            return data;
        }
    }
}






