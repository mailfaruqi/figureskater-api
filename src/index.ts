import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Database of Figure Skater",
  });
});

export default app;
