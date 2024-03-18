
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
exports.processPayment = async (req, res) => {
    
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "npr",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }

  exports.sendStripeKey = (req, res) =>{
    return res.send({STRIPEAPIKEY: process.env.STRIPE_API_KEY})
  }