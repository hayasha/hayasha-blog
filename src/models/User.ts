import {DataTypes, Model} from "sequelize";
import {sequelize} from "../configs/sequelize";

export class User extends Model {
    private id!: number

    private nickname!: string

    private email!: string

    private password!: string

    private createdAt!: Date

    private updatedAt!: Date

    private deletedAt!: Date

    getId() {
        return this.id
    }

    getNickname() {
        return this.nickname
    }

    getEmail() {
        return this.email
    }

    encryptPassword() {
        this.password = this.password.split('').reverse().join()
    }
}

const options = {
    sequelize,
    timestamps: true,
}

User.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
}, options)