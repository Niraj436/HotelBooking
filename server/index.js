import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import HotelRoute from './Routes/HotelRoute.js';
import RoomRoute from './Routes/RoomRoute.js';
import UserRoute from './Routes/UserRoute.js';
import AuthRoute from './Routes/AuthRoute.js';
import BookingRoute from './Routes/BookingRoute.js';
import PaymentRoute from './Routes/PaymentRoute.js';
import ContactRoute from './Routes/ContactRoute.js';

const app = express();
dotenv.config();

// mongodb connection
const connectDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log('Connected to the database');
	} catch (error) {
		console.log('error connecting to database');
		throw error;
	}
};

const Port = process.env.PORT || 8000;

// middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		methods: 'GET,POST,PUT,DELETE',
		credentials: true,
	})
);
// app.get('/', (req, res) => {
// 	res.send('Welcome to the Hotel Management System API');
// });
app.use('/', HotelRoute);
app.use('/auth', AuthRoute);
app.use('/rooms', RoomRoute);
app.use('/user', UserRoute);
app.use('/bookings', BookingRoute);
app.use('/payment', PaymentRoute);
app.use('/contacts', ContactRoute);
app.use('/public/uploads', express.static('public/uploads'));

app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessege = err.message || 'Something went wrong';
	return res.status(errorStatus).json(errorMessege);
});

// server creation
app.listen(Port, () => {
	connectDatabase();
	console.log(`Server started at http://localhost:${Port}`);
});
