import express from "express";
import axios from "axios";

const router = express.Router();

/*
fetch('/api/proxy', {
	method: 'POST',
	body: JSON.stringify({
		url: // API URL
		method: // 
	})
})
*/

router.get("/proxy", async (request, response) => {
  const url =
    "http://api.fungenerators.com/fact/random?category=Countries&subcategory=USA";
  try {
    const urlResponse = await axios.get(url);
  } catch (e) {
    return response.status(500).json({ ...e });
  }
  response.status(urlResponse.status).json(urlResponse.data);
});

export default router;
