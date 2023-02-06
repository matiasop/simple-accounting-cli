"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/db.ts
var import_client = require("@prisma/client");
var globalForPrisma = global;
var prisma = globalForPrisma.prisma || new import_client.PrismaClient({
  log: ["query"]
});
if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;

// src/types/AccountType.ts
var AccountType = /* @__PURE__ */ ((AccountType2) => {
  AccountType2[AccountType2["Asset"] = 0] = "Asset";
  AccountType2[AccountType2["Liability"] = 1] = "Liability";
  AccountType2[AccountType2["Equity"] = 2] = "Equity";
  return AccountType2;
})(AccountType || {});
var AccountType_default = AccountType;

// src/Account/Account.ts
function createAccount(name, type) {
  return __async(this, null, function* () {
    const account = yield prisma.account.create({ data: { name, balance: 0, type } });
    return account;
  });
}
function listAccounts(type) {
  return __async(this, null, function* () {
    const accounts = yield prisma.account.findMany({
      where: { type },
      orderBy: { name: "asc" }
    });
    return accounts;
  });
}

// src/Entry/Entry.ts
function createEntry(debitedId, creditedId, amount, description, date) {
  return __async(this, null, function* () {
    const entry = yield prisma.entry.create({
      data: {
        debited: { connect: { id: debitedId } },
        credited: { connect: { id: creditedId } },
        amount,
        description,
        date
      }
    });
    return entry;
  });
}
function listEntries() {
  return __async(this, null, function* () {
    const entries = yield prisma.entry.findMany({
      orderBy: { date: "desc" }
    });
    return entries;
  });
}

// src/app.ts
function main() {
  return __async(this, null, function* () {
    const cash = yield createAccount("cash", AccountType_default.Asset);
    const bankDebt = yield createAccount("bank debt", AccountType_default.Liability);
    const assets = yield listAccounts(AccountType_default.Asset);
    const liabilities = yield listAccounts(AccountType_default.Liability);
    const entry = yield createEntry(cash.id, bankDebt.id, 500, "loan to the bank", new Date());
    const entries = yield listEntries();
    console.log(entries);
    console.log(assets);
    console.log(liabilities);
  });
}
main().then(() => __async(exports, null, function* () {
  yield prisma.$disconnect();
})).catch((e) => __async(exports, null, function* () {
  console.log(e);
  yield prisma.$disconnect();
  process.exit(1);
}));
