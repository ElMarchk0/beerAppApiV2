import { Express, Request, Response } from "express";
import {
  createReviewHandler,
  getAllReviewsHandler,
  getReviewsByBeerHandler,
} from "../controllers/review.controller";
import {
  getAllBeersHandler,
  getOneBeerHandler,
  getBeerByQueryHandler,
} from "../controllers/beer.controller";

export default function (app: Express) {
  app.get("/reviews", (req: Request, res: Response) => {
    getAllReviewsHandler(req, res);
  });
  app.get("/reviews/:beerId", (req: Request, res: Response) => {
    const beerId = req.params.beerId as string;
    getReviewsByBeerHandler(req, res, parseInt(beerId));
  });
  app.post("/reviews", (req: Request, res: Response) => {
    createReviewHandler(req, res);
  });
  app.get("/beers", (req: Request, res: Response) => {
    getAllBeersHandler(req, res);
  });
  app.get("/beers/search/:query", (req: Request, res: Response) => {
    const query = req.params.query as string;
    getBeerByQueryHandler(req, res, query);
  });
  app.get("/beers/beer/:beerId", (req: Request, res: Response) => {
    const beerId = req.params.beerId as string;
    getOneBeerHandler(req, res, beerId);
  });
}
