import {fromNodeMiddleware} from "h3"

export default fromNodeMiddleware((req,res,next) => {

  console.log(`Server Middleware: New ${req.method} request to ${req.url} with a random number ${Math.random()}`)

  next()
})
