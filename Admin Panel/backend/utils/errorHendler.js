const errorHendlar = (error) => {
	if (error.name === "ValidationError") {

		const message = Object.values(error.errors).map(value => value.message);
		return message
	} else {
		return false
	}
}
module.exports = errorHendlar;