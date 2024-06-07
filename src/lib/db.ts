import * as pg from "pg";
import { dataFigureskaters } from "../data/figureskaters";
const { Client } = pg;

export const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// console.log(client);
