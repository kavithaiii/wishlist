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
	    		headers: {
			    'Authorization': `Basic ${process.env.Pid}:${process.env.API_KEY}`
			  }
	    	})
	    // res.json(data)
	    console.log('>>> response from SWYM relay')
	    console.log(res.json(data))
	  }
	  catch (err) {
	    console.log(err)
	  }
	  
	// Send a success message in response
      res.status(200).json({ message: `Wishlist ... loading from server!` })
}
