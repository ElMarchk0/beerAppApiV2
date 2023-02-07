import mongoose from "mongoose";
import { IReview } from "../interfaces/review.interface";

const reviewSchema = new mongoose.Schema(
  {
    createdBy: "string",
    createDate: "date",
    beerId: "number",
    content: "string",
    rating: "number",
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model<IReview>("review", reviewSchema);

export default Review;
