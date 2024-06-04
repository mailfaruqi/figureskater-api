import { Hono } from "hono";

import { dataFigureskaters } from "./data/figureskaters";

let figureskaters = dataFigureskaters;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Database of Figure Skater",
  });
});

app.get("/figureskaters", (c) => {
  return c.json(figureskaters);
});

app.get("/figureskaters/:id", (c) => {
  const id = Number(c.req.param("id"));

  const figureskater = figureskaters.find(
    (figureskater) => figureskater.id == id
  );

  if (!figureskater) {
    c.status(404);
    return c.json({ message: "Figure Skater not found" });
  }

  return c.json(figureskater);
});

app.post("/figureskaters", async (c) => {
  const body = await c.req.json();

  const nextId = figureskaters[figureskaters.length - 1].id + 1;

  const newFigureskater = {
    id: nextId,
    name: body.name,
  };

  figureskaters = [...figureskaters, newFigureskater];

  return c.json({ figureskater: newFigureskater });
});

export default app;
