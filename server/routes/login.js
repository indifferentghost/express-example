import express from "express";
import axios from "axios";
import bcrypt from "bcrypt";

const router = express.Router();
/** database password */
let password;

bcrypt.genSalt(11, function(error, salt) {
	if (error) console.error(error)
	bcrypt.hash('123123', salt, function(error, hash) {
		if (error) console.error(error)
		password = hash
	});
});
/** end database password */

router.post("/", async (request, response) => {
  const { password: pass } = request.body;
	bcrypt.compare(pass, password, function(err, result) {
		if (err) console.log(err)
		if (result === false) {

			return response.status(403).json({ message: 'unauthorized' })
		}
		response.status(200).json({ message: 'success' })
	})
});

export default router;
