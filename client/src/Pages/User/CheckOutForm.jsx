import React, { useEffect, useState } from 'react';
import {
	PaymentElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { API, FRONTEND_API } from '../../config';

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const storedBookingDetails = JSON.parse(
		sessionStorage.getItem('bookingDetails')
	);

	// Access individual values
	const room = storedBookingDetails.room;
	const userid = storedBookingDetails.userid;
	const fromdate = storedBookingDetails.fromdate;
	const todate = storedBookingDetails.todate;
	const totaldays = storedBookingDetails.totaldays;
	const totalamount = storedBookingDetails.totalamount;

	const handleClick = async () => {
		const bookingDetails = {
			room,
			userid,
			fromdate,
			todate,
			totaldays,
			totalamount,
		};

		try {
			await axios.post(`${API}/bookings/bookroom`, bookingDetails);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			'payment_intent_client_secret'
		);

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case 'succeeded':
					setMessage('Payment succeeded!');
					break;
				case 'processing':
					setMessage('Your payment is processing.');
					break;
				case 'requires_payment_method':
					setMessage('Your payment was not successful, please try again.');
					break;
				default:
					setMessage('Something went wrong.');
					break;
			}
		});
	}, [stripe]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: `${FRONTEND_API}/payment/success`,
			},
		});

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		if (error.type === 'card_error' || error.type === 'validation_error') {
			setMessage(error.message);
		} else {
			setMessage('An unexpected error occurred.');
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: 'tabs',
	};

	return (
		<div className='flex justify-center py-4 md:flex-row flex-col'>
			<div className='card md:w-96 w-full bg-base-100 shadow-xl'>
				<div className='card-body'>
					<h2 className='card-title'>Room Details</h2>
					<div>
						<p className='py-2'>
							<span className='font-bold py-2'>Name: </span>
							{room.title}
						</p>
						<p className='py-2'>
							<span className='font-bold'>Room Number: </span>
							{room.roomNumber}
						</p>
						<p className='py-2'>
							<span className='font-bold'>Check in date: </span>
							{fromdate}
						</p>
						<p className='py-2'>
							<span className='font-bold'>Check out date: </span>
							{todate}
						</p>
						<p className='py-2'>
							<span className='font-bold'>Total Days: </span>
							{totaldays}
						</p>
						<p className='py-2'>
							<span className='font-bold'>Total amount per day: </span>
							Rs {totalamount / totaldays}
						</p>
						<div className='py-2 text-center'>
							<p className='font-bold text-2xl '>Total amount </p> <br />
							<p className=' text-2xl text-gray-600'>Rs {totalamount}</p>
						</div>
					</div>
				</div>
			</div>

			<div className='w-1/2 p-5'>
				<form
					id='payment-form'
					onSubmit={handleSubmit}
					className='border'>
					<PaymentElement
						id='payment-element'
						options={paymentElementOptions}
					/>
					<button
						className='pay_btn'
						disabled={isLoading || !stripe || !elements}
						id='submit'
						onClick={handleClick}>
						<span id='button-text'>
							{isLoading ? (
								<div
									className='spinner'
									id='spinner'></div>
							) : (
								'Pay now'
							)}
						</span>
					</button>
					{/* Show any error or success messages */}
					{message && <div id='payment-message'>{message}</div>}
				</form>
			</div>
		</div>
	);
}
