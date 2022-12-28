module.exports = (sequelize, DataTypes) => {
    const WG_LOCAL_CONFIG = sequelize.define('WG_LOCAL_CONFIG', {
        // Model attributes are defined here
        PC_NO: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        CONNECTION_TYPE: {
            type: DataTypes.STRING(150),
            allowNull: true           
        },
        ENV_DRIVER:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ENV_SERVER:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ENV_DSN:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ENV_DB_NAME:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ENV_DBQ:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ENV_ID:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ENV_PWD:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ENV_CONNECTION:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        KEEP_CONN:{
            type: DataTypes.TINYINT(1),
            allowNull: true
        },
        DBMS_TYPE:{
            type: DataTypes.STRING(20),
            allowNull: true
        },
        API_MODE_USE_YN:{
            type: DataTypes.TINYINT(1),
            allowNull: true
        },
        API_MODE_URL:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        WORKER:{
            type: DataTypes.STRING(150),
            allowNull: true
        },
        UPDATE_DATE:{
            type: DataTypes.DATE,
            allowNull: true
        },
        UPDATE_TIME:{
            type: DataTypes.TIME,
            allowNull: true
        },
    },
    {
        updatedAt: false,
        
    })
    WG_LOCAL_CONFIG.removeAttribute('id') // remove id attribute
    }