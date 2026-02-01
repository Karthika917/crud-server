//importing json-server package
const jsonServer=require('json-server')

//creates a server instance
const serverApp=jsonServer.create()

//creating routes/api endpoints for resource in server
const router=jsonServer.router('db.json')

//creating json-server default middleware
const middleware=jsonServer.defaults()

//defining PORT number for server to run
const PORT=3000 || process.env.PORT

//configuring middleware and routes to server
serverApp.use(middleware)
serverApp.use(router)

serverApp.listen(PORT,(err)=>{
    console.log("Server running At:",PORT)
    console.log(err)
})