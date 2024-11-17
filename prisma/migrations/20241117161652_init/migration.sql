-- CreateTable
CREATE TABLE "User" (
    "cuid" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "user_role" TEXT NOT NULL DEFAULT 'user',
    "name" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
