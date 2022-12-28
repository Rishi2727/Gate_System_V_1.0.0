module.exports = (sequelize, DataTypes) => {
    const WG_MANAGER = sequelize.define('WG_MANAGER', {
        // Model attributes are defined here
        MANAGER_ID:{
            type: DataTypes.STRING(30),
            allowNull: false,
            primaryKey: true,
            unique: true,            
        },
        MANAGER_NAME:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        MANAGER_PWD:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        AUTH_ID:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        GROUP_ID:{
            type: DataTypes.INTEGER,
            allowNull: true,
            
        },
        MANAGER_PHONE_NO:{
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        MANAGER_DESC:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        MODIFIED_DATE:{
            type: DataTypes.DATE,
            allowNull: true,
        },
        WORKER_ID:{
            type: DataTypes.STRING(30),
            allowNull: true,
        },   
    },
    {
        updatedAt: false,
        
    })
    WG_MANAGER.removeAttribute('id') // remove id attribute
        // model associations
    WG_MANAGER.associate = function(models) {
        WG_MANAGER.belongsTo(models.WG_MANAGER_GROUP, {foreignKey: 'GROUP_ID', targetKey: 'GROUP_ID'})
    }
    return WG_MANAGER

    

}