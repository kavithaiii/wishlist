// Import deps
import React, { useState, useCallback } from 'react'
import axios from 'axios'
import {
  Page,
  Form,
  Button,
  FormLayout,
  TextField
} from '@shopify/polaris'

export const Wishlist = () => {
  const [email, setEmail] = useState('')
  const [wishlist, setWishlist] = useState('')
  const [formErrors, setFormErrors] = useState('')

  const handleEmailChange = useCallback((value) => setEmail(value), [])

  const handleSubmit = useCallback((_event) => {
    setEmail('');
    console.log('inside submit')
    // Send GET request to 'wishlist/all' endpoint
    axios
      .get('http://localhost:4001/wishlist/all')
      .then(response => {
        // Update the wishlist state
        setWishlist(response.data.message)
	console.log('response for wishlist', response.data.message)
      })
      .catch(error => console.error(`There was an error retrieving the wishlist: ${error}`))
  
  }, []);

  return (
    <Page
      title="User Wishlists"
    >
      <Form onSubmit={handleSubmit}>
          <FormLayout>
              <TextField
              	type= "email"
                value={email}
                label="User Email Address"
                placeholder="Enter an email address to search"
                onChange={handleEmailChange}
              />
              <Button submit>Search User</Button>
          </FormLayout>
      </Form>
      <div><p>{wishlist}</p></div>
    </Page>
  );
}



