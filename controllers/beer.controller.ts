import { Request, Response } from "express";
import {
  getAllBeers,
  getOneBeer,
  getBeerByQuery,
} from "../services/beer.service";

export const getBeerByQueryHandler = async (
  req: Request,
  res: Response,
  query: string
) => {
  const review = await getBeerByQuery(query);
  return res.send(review);
};

export const getAllBeersHandler = async (req: Request, res: Response) => {
  const allBeers = await getAllBeers();
  return res.send(allBeers);
};

export const getOneBeerHandler = async (
  req: Request,
  res: Response,
  beerId: string
) => {
  const beer = await getOneBeer(parseInt(beerId));
  return res.send(beer);
};
