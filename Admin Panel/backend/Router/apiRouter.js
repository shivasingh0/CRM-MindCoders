const express = require('express')
const v1router = require('./v1router')
const v2Router = require('./v2Router')
const { authenticateToken } = require('../config/tokenManager')
const apiRouter = express.Router()


apiRouter.use("/v1",v1router)


// authenticate v2 token and run all apis.
apiRouter.use("/v2",async (req, res, next) => {
    const result = await authenticateToken(req)
    if (result.status)
        next()
    else
        res.json(result)

})

apiRouter.use("/v2",v2Router)

module.exports = apiRouter;