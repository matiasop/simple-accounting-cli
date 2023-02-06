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

// src/Entry/Entry.ts
var Entry_exports = {};
__export(Entry_exports, {
  createEntry: () => createEntry,
  deleteEntry: () => deleteEntry,
  listEntries: () => listEntries
});
module.exports = __toCommonJS(Entry_exports);

// src/db.ts
var import_client = require("@prisma/client");
var globalForPrisma = global;
var prisma = globalForPrisma.prisma || new import_client.PrismaClient({
  log: ["query"]
});
if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;

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
function deleteEntry(id) {
  return __async(this, null, function* () {
    yield prisma.entry.delete({ where: { id } });
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createEntry,
  deleteEntry,
  listEntries
});
