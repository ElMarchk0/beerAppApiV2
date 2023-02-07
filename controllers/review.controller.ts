import { Request, Response } from "express";
import {
  createReview,
  getAllReviews,
  getReviewsByBeer,
} from "../services/review.service";

export const createReviewHandler = async (req: Request, res: Response) => {
  const body = req.body;
  const review = await createReview({ ...body });
  return res.send(review);
};

export const getAllReviewsHandler = async (req: Request, res: Response) => {
  const allReviews = await getAllReviews();
  return res.send(allReviews);
};

export const getReviewsByBeerHandler = async (
  req: Request,
  res: Response,
  beerId: number
) => {
  const review = await getReviewsByBeer(beerId);
  return res.send(review);
};
