const status = require('http-status');
const db = require('../db/db.connection.js')
const ManagerGroup = db.WG_MANAGER_GROUP;




const addManagerGroup = async (req, res) => {
    try {
        const { GROUP_NAME, WORKER_ID } = req.body;
        console.log(GROUP_NAME, WORKER_ID);
 
        const managerGroupData = await ManagerGroup.create({
            GROUP_ID: 1,
            GROUP_NAME: "GROUP_NAME",
            WORKER_ID : "WORKER_ID"
        });

        console.log(managerGroupData)
        return res.status(status.CREATED).json(managerGroupData);
    } catch (error) {
        return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
    }


}

const getManagerGroup = async (req, res) => {
    try {
        const managerGroupData = await ManagerGroup.findAll();
        return res.status(status.OK).json(managerGroupData);
    } catch (error) {
        return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
    }

}




module.exports = {
    addManagerGroup,
    getManagerGroup
}