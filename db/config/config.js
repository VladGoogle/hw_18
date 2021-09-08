require("dotenv").config();

module.exports = {
    development: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        dialect: "postgres",
        define: {
            freezeTableName: true,
            underscoredAll: true,
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
        seederStorageTableName: "sequelize_data",
        seederStorage: "sequelize",
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};
