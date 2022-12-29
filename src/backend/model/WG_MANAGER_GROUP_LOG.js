module.exports = (sequelize, DataTypes) => {
    const WG_MANAGER_GROUP_LOG = sequelize.define('WG_MANAGER_GROUP_LOG', {
        // Model attributes are defined here
        LOG_SEQ:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        GROUP_ID:{
            type: DataTypes.STRING(30),
            allowNull: false,
            // primaryKey: true,
            // unique: true,
        },
        GROUP_NAME:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        MODIFIED_DATE:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        WORKER_ID:{
            type: DataTypes.STRING(30),
            allowNull: false,
        }
    },    {
        updatedAt: false,
        
    })
    WG_MANAGER_GROUP_LOG.removeAttribute('id') // remove id attribute
    // model associations
    WG_MANAGER_GROUP_LOG.associate = function(models) {
        WG_MANAGER_GROUP_LOG.belongsTo(models.WG_MANAGER_GROUP, {foreignKey: 'GROUP_ID',targetKey: 'GROUP_ID'})
    }
    return WG_MANAGER_GROUP_LOG
}
