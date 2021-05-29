//everything in api, is backend code
// the secret key is have to be kept secret
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// then we get request, we access the items

export default async (req, res) => {
    // this is going to be called then we his this endpoint  .../api-create-checkout-session
    // this will pull out this data from the request body
    const {items, email} = req.body;
    console.log(items);
    console.log(email);

};


