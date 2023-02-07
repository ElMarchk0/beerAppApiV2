import * as mongoose from "mongoose";
import config from "config";

export const connect = () => {
  mongoose.set("strictQuery", false);
  const mongoUrl = config.get("mongoUrl") as string;
  try {
    return mongoose.connect(mongoUrl).then(() => console.log("Db connected"));
  } catch (e) {
    console.log(e);
  }
};
