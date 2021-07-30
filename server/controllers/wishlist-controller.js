// Import authorisation of api key and merchant id
const axios = require('axios');
require('dotenv-safe').config();

// Retrieve all wishlist
exports.wishlistAll = async (req, res) => {
  // Get all wishlist from backend

   console.log('api url>>>>', process.env.API_URL)
   
   console.log("'/wishlist/all' call");
	  try {
	    const res = await axios.get(`${process.env.API_URL}/storeadmin/me`,
	    	{
	    		auth: {
			    username: `${process.env.Pid}`,
			    password: `${process.env.API_KEY}`
			  }
	    	})
		    // res.json(data)
		    console.log('>>> Authenticated')
		    console.log(res.status)
	  	}	
	  	catch (err) {
	    	console.log('Error on authentication',err)
	    }
	  
	// Send a success message in response
	res.status(200).json({ message: `Wishlist ... loading from server!` })
}
