"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/Account/Account.ts
var Account_exports = {};
__export(Account_exports, {
  createAccount: () => createAccount,
  deleteAccount: () => deleteAccount,
  listAccounts: () => listAccounts
});
module.exports = __toCommonJS(Account_exports);

// src/db.ts
var import_client = require("@prisma/client");
var globalForPrisma = global;
var prisma = globalForPrisma.prisma || new import_client.PrismaClient({
  log: ["query"]
});
if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;

// src/Account/Account.ts
function createAccount(name, type) {
  return __async(this, null, function* () {
    const account = yield prisma.account.create({ data: { name, balance: 0, type } });
    return account;
  });
}
function deleteAccount(id) {
  return __async(this, null, function* () {
    yield prisma.account.delete({ where: { id } });
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createAccount,
  deleteAccount,
  listAccounts
});
