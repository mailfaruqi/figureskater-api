import { Hono } from "hono";

import { dataFigureskaters } from "./data/figureskaters";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Database of Figure Skater",
  });
});

app.get("/figureskaters", (c) => {
  return c.json(dataFigureskaters);
});

app.get("/figureskaters/:id", (c) => {
  const id = Number(c.req.param("id"));

  const figureskater = dataFigureskaters.find(
    (figureskater) => figureskater.id == id
  );

  if (!figureskater) {
    c.status(404);
    return c.json({ message: "Figure Skater not found" });
  }

  return c.json(figureskater);
});

export default app;
