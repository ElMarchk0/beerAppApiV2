import Review from "../models/review.model";
import { IReview } from "../interfaces/review.interface";

export const createReview = async (review: IReview) => {
  let data = {};
  try {
    data = await Review.create(review);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getReviewsByBeer = async (beerId: number) => {
  try {
    const data = await Review.find({ beerId: beerId });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllReviews = async () => {
  try {
    const data = await Review.find({});
    return data;
  } catch (e) {
    console.error(e);
  }
};
