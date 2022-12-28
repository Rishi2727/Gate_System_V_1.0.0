const {Sequelize, DataTypes} = require('sequelize');


db_name = 'test'
db_user = 'root'
db_password = ''



const sequelize = new Sequelize(db_name, db_user, db_password,{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});



async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection()


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize



// DB Sync
syncDB= async ()=>{
    try {
        await db.sequelize.sync({force: true})
        console.log("DB Synced");
    } catch (error) {
        console.log("Error: ", error);
    }
}

syncDB()


// Model import
db.WG_LOCAL_CONFIG = require('../model/WG_LOCAL_CONFIG')(sequelize, DataTypes) // WG_LOCAL_CONFIG model-----WG_LOCAL_CONFIG table
db.WG_MANAGER = require('../model/WG_MANAGER')(sequelize, DataTypes) // WG_MANAGER model-----WG_MANAGER table
db.WG_MANAGER_GROUP = require('../model/WG_MANAGER_GROUP')(sequelize, DataTypes) // WG_MANAGER_GROUP model-----WG_MANAGER_GROUP table
db.WG_MANAGER_GROUP_LOG = require('../model/WG_MANAGER_GROUP_LOG')(sequelize, DataTypes) // WG_MANAGER_GROUP_LOG model-----WG_MANAGER_GROUP_LOG table




module.exports = db

