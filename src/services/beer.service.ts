import Beer from "../models/beer.model";

export const getBeerByQuery = async (query: string) => {
  let data;

  try {
    if (query) {
      data = await Beer.aggregate([
        {
          $search: {
            index: "beerSearch",
            text: {
              query: query,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getOneBeer = async (beerId: number) => {
  try {
    const data = Beer.find({ id: beerId });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllBeers = async () => {
  try {
    const data = Beer.find({});
    return data;
  } catch (e) {
    console.error(e);
  }
};
