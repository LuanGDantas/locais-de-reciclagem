require('dotenv/config');

module.exports = {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.BD_HOST,
    port: 3307,
    dialect: "mysql",
    define: {
        timestamps: false,
        undercored: true,
    },
};
