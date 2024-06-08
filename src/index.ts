import { Hono } from "hono";

import { dataFigureskaters } from "./data/figureskaters.ts";
import { prisma } from "./lib/db.ts";

const app = new Hono();

// app.post("/figureskaters/seed", async (c) => {
//   const figureskaters = await prisma.figureSkater.createMany({
//     data: dataFigureskaters,
//   });
//   return c.json(figureskaters);
// });

app.get("/", (c) => {
  return c.json({
    message: "Database of Figure Skater",
  });
});

app.get("/figureskaters", async (c) => {
  const figureskaters = await prisma.figureSkater.findMany();
  return c.json(figureskaters);
});

app.get("/figureskaters/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const figureskater = await prisma.figureSkater.findUnique({
    where: { id },
  });

  if (!figureskater) {
    c.status(404);
    return c.json({ message: "Figure Skater not found" });
  }

  return c.json(figureskater);
});

app.post("/figureskaters", async (c) => {
  const body = await c.req.json();

  const figureskaterData = {
    name: body.name,
    country: body.country,
  };

  const figureskater = await prisma.figureSkater.create({
    data: figureskaterData,
  });

  return c.json({ figureskater });
});

app.delete("/figureskaters", async (c) => {
  await prisma.figureSkater.deleteMany();

  return c.json({ message: "All figure skaters data have been removed" });
});

app.delete("/figureskaters/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const deletedFigureskater = await prisma.figureSkater.delete({
    where: { id },
  });

  return c.json({
    message: `Delete figure skater data with id ${id}`,
    deletedFigureskater,
  });
});

app.put("/figureskaters/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const figureskaterData = {
    name: body.name,
    country: body.country,
  };

  const updatedFigureSkater = await prisma.figureSkater.update({
    where: { id },
    data: figureskaterData,
  });

  return c.json({
    message: `Updated figure skater data with id ${id}`,
    updatedFigureSkater,
  });
});

console.log("Figure Skaters API is running");

export default app;
