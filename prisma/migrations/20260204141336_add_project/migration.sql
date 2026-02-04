-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "techstack" TEXT[],
    "github" TEXT NOT NULL,
    "live" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
