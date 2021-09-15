import { Sequelize, Model, DataTypes } from "sequelize";
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(255),
            allowNull: false,
            unique: true
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