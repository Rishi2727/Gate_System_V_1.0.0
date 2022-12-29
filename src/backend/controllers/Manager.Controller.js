const status = require('http-status');
const db = require('../db/db.connection.js')
const ManagerGroup = db.WG_MANAGER_GROUP;



// Add Group data
const addManagerGroup = async (req, res) => {
    try {
        const { GROUP_NAME, WORKER_ID } = req.body; 
        const managerGroupData = await ManagerGroup.create({
            GROUP_NAME: GROUP_NAME,
            WORKER_ID : WORKER_ID
        });
        return res.status(status.CREATED).json(managerGroupData);
    } catch (error) {
        return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

// Get all Group data
const getManagerGroup = async (req, res) => {
    try {
        const managerGroupData = await ManagerGroup.findAll();
        return res.status(status.OK).json(managerGroupData);
    } catch (error) {
        return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
    }
}


// Get one data by id
const getElementsById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const managerGroupData = await ManagerGroup.findOne({
            where: {
                GROUP_ID: id
            }
        });
        return res.status(status.OK).json(managerGroupData);
    } catch (error) {
        return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
    }

}

// Update Group data
const updateManagerGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const { GROUP_NAME, WORKER_ID } = req.body;
        const updated = await ManagerGroup.update({
            GROUP_NAME: GROUP_NAME,
            WORKER_ID: WORKER_ID,
            MODIFIED_DATE: new Date()
        }, {
            where: { GROUP_ID: id }
        });
        console.log(updated);
        if (updated) {
            const updatedManagerGroup = await ManagerGroup.findOne({ where: { GROUP_ID: id } });
            return res.status(status.OK).json(updatedManagerGroup);
        }
        throw new Error('Manager Group no changed found');
    } catch (error) {
        return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

// Delete Group data
const deleteManagerGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await ManagerGroup.destroy({
            where: { GROUP_ID: id }
        });
        if (deleted) {
            return res.status(status.OK).json("Manager Group deleted");
        }
        throw new Error("Manager Group not found");
    } catch (error) {
        return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
    }
}




module.exports = {
    addManagerGroup,
    getManagerGroup,
    getElementsById,
    updateManagerGroup,
    deleteManagerGroup
}