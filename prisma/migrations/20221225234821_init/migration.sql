-- CreateTable
CREATE TABLE "Account" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "balance" REAL NOT NULL,
    "type" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Entry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "debitedId" INTEGER NOT NULL,
    "creditedId" INTEGER NOT NULL,
    "amount" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    CONSTRAINT "Entry_debitedId_fkey" FOREIGN KEY ("debitedId") REFERENCES "Account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Entry_creditedId_fkey" FOREIGN KEY ("creditedId") REFERENCES "Account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
