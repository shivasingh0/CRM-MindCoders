const errorHandler  = require('./errorHendler')
const bcrypt = require('bcrypt')
const soltRounds = 10;

const encyptPassword = async (password) => {

	try {

		let hash = await bcrypt.hash(password, soltRounds)
		return hash

	} catch (error) {
		err = errorHandler(error)
		console.log(err ? err : error.message)
	}
}

const verifyPassword  = async (studentPassword,hashPassword)=>{
	try {
        const isMatch = await bcrypt.compare(studentPassword, hashPassword);
        if (isMatch) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
		err = errorHandler(error)
		console.log(err ? err : error.message)
	}
}

module.exports = { encyptPassword,verifyPassword  }