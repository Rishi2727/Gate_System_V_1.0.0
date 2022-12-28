module.exports = (sequelize, DataTypes) => {
    const WG_MANAGER_GROUP = sequelize.define('WG_MANAGER_GROUP', {
        // Model attributes are defined here
        GROUP_ID:{
            type: DataTypes.STRING(30),
            allowNull: false,
            primaryKey: true,
            unique: true,
            
        },
        GROUP_NAME:{
            type: DataTypes.STRING(100),
            allowNull: false,
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
    WG_MANAGER_GROUP.removeAttribute('id') // remove id attribute
}