-- CreateTable
CREATE TABLE "FigureSkater" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FigureSkater_pkey" PRIMARY KEY ("id")
);
