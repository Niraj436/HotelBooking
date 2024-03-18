import express from "express";
import { processPayment, sendStripeKey } from "../Controller/PaymentController.cjs";

const router = express.Router();

router.post("/processPayment", processPayment);
router.get("/getStripeKey", sendStripeKey)

export default router;
