import { Hono } from "hono";

import { dataFigureskaters, type FigureSkater } from "./data/figureskaters";

let figureSkaters = dataFigureskaters;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Database of Figure Skater",
  });
});

app.get("/figureskaters", (c) => {
  return c.json(figureSkaters);
});

app.get("/figureskaters/:id", (c) => {
  const id = Number(c.req.param("id"));

  const figureskater = figureSkaters.find(
    (figureskater) => figureskater.id == id
  );

  if (!figureskater) {
    c.status(404);
    return c.json({ message: "Figure Skater not found" });
  }

  return c.json(figureskater);
});

app.post("/figureskaters/seed", async (c) => {
  figureSkaters = dataFigureskaters;
  return c.json({ figureSkaters });
});

app.post("/figureskaters", async (c) => {
  const body = await c.req.json();

  const nextId = figureSkaters[figureSkaters.length - 1].id + 1;

  const newFigureskater: FigureSkater = {
    id: nextId,
    name: body.name,
    country: body.country,
    freePrograms: body.freePrograms,
  };

  figureSkaters = [...figureSkaters, newFigureskater];

  return c.json({ figureskater: newFigureskater });
});

app.delete("/figureskaters", (c) => {
  figureSkaters = [];

  return c.json({ message: "All figure skaters data have been removed" });
});

export default app;
