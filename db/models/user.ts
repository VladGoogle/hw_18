import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize();

export class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public fullName!: string;
    public Age!: number;
    public email!: string;
    public password!: string;
}

export interface UserObj{
    id:number,
    name:string,
    fullName:string,
    Age:number,
    email:string,
    password:string
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        fullName: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        Age: {
            type: new DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },

    },
    {
        tableName: "Users",
        sequelize, // passing the `sequelize` instance is required
    }
);