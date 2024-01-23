const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
// get config vars
dotenv.config();

class JWT {
    generateAccessToken(user) {
        return jwt.sign({ data: user }, process.env.TOKEN_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN });
    }

    authenticateToken(req) {
        return new Promise((resolve, reject,) => {
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]

            if (token == null)
                resolve({ status: false, message: "authentication failed !" })
            else {
                jwt.verify(token, process.env.TOKEN_SECRET, (err, tokendata) => {
                    if (err)
                        resolve({ status: false, message: "Invalid or Expire Token !" })
                    else {
                        req.data = tokendata.data

                        resolve({ status: true })
                    }
                })
            }
        })
    }
}

module.exports = new JWT()