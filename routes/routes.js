const express=require("express")
const routes=express.Router()

const taskcontroller = require('../controller/TaskController')

routes.post('/iconadd',taskcontroller.image)
routes.post('/category/insert',taskcontroller.task_category)
routes.post('/task/insert',taskcontroller.task_insert)
routes.post('/task/show',taskcontroller.show_task)
routes.post('/task/status',taskcontroller.taskfilter)



module.exports=routes