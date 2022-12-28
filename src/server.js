const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
require('./backend/db/db.connection.js')



const router = require('./backend/routers/router.js')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/",router)








const host = '0.0.0.0'
const port = 54321

app.set ('Host', host)
app.set ('Port', port)








// app.get('/addManagerGroup',Manager_Group.addManagerGroup)
// app.get('/getManagerGroup',Manager_Group.getManagerGroup)
// app.get('/getManagerGroupById',Manager_Group.getManagerGroupById)
// app.get('/updateManagerGroup',Manager_Group.updateManagerGroup)
// app.get('/deleteManagerGroup',Manager_Group.deleteManagerGroup)



// server.listen(port, host, () => {
//     console.log(`Server running at http://${host}:${port}/`)
// })
// return

module.exports={
    app,
    server
}