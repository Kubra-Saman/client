import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productReviews: { type: Number, max: 5, default: 0 }, // Overall rating of the product
    productDescription: { type: String },
    productImages: [{ type: String }], // Array of image URLs
    productPrice: { type: Number, required: true },
    nutritionalInformation: {
      calories: { type: Number, required: true },
      protein: { type: Number, required: true },
      carbs: { type: Number, required: true },
      fat: { type: Number, required: true },
    },
    productIngredients: [{ type: String }], // Array of ingredients
    storageInstructions: { type: String },
    customerReviews: [
      {
        reviewerName: { type: String, required: true },
        reviewTitle: { type: String },
        reviewDate: { type: Date, required: true },
        reviewText: { type: String, required: true },
        isVerifiedPurchase: { type: Boolean, default: false },
        helpfulCount: { type: Number, default: 0 }, // Count of "Helpful" votes
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create the Product model
const Product = mongoose.model("Product", productSchema);

export default Product;