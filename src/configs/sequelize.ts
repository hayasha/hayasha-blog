import {Sequelize} from "sequelize";

const sequelize = new Sequelize(
    'hayasha_blog',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: 'Asia/Seoul'
    },
)

sequelize
    .sync({ force: true })

export { sequelize }