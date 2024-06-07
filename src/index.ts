import { Hono } from "hono";

import { dataFigureskaters, type FigureSkater } from "./data/figureskaters.ts";
import { client } from "./lib/db.ts";

let figureSkaters = dataFigureskaters;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Database of Figure Skater",
  });
});

app.get("/figureskaters", async (c) => {
  const res = await client.query("SELECT * FROM figureskaters");
  console.log(res);

  // const figureSkaters = res.rows as FigureSkater[];
  // await client.end();
  return c.json(null);
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

app.delete("/figureskaters/:id", (c) => {
  const id = Number(c.req.param("id"));

  const figureskater = figureSkaters.find(
    (figureskater) => figureskater.id == id
  );

  if (!figureskater) {
    c.status(404);
    return c.json({ message: "Figure Skater not found" });
  }

  const updatedFigureskater = figureSkaters.filter(
    (figureskater) => figureskater.id != id
  );

  figureSkaters = updatedFigureskater;

  return c.json({
    message: `Delete figure skater data with id ${id}`,
  });
});

app.put("/figureskaters/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const figureskater = figureSkaters.find(
    (figureskater) => figureskater.id == id
  );

  if (!figureskater) {
    c.status(404);
    return c.json({ message: "Figure Skater not found" });
  }

  const newFigureskater = {
    ...figureskater,
    name: body.name || figureskater.name,
    country: body.country || figureskater.country,
    freePrograms: body.freePrograms || figureskater.freePrograms,
  };

  const updatedFigureskater = figureSkaters.map((figureskater) => {
    if (figureskater.id == id) {
      return newFigureskater;
    } else {
      return figureskater;
    }
  });

  figureSkaters = updatedFigureskater;

  return c.json({
    message: `Updated figure skater data with id ${id}`,
    figureskater: newFigureskater,
  });
});

export default app;
