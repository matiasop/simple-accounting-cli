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

// src/app.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
function main() {
  return __async(this, null, function* () {
    const users = yield prisma.user.findMany();
    console.log(users);
  });
}
main().then(() => __async(exports, null, function* () {
  yield prisma.$disconnect();
})).catch((e) => __async(exports, null, function* () {
  console.log(e);
  yield prisma.$disconnect();
  process.exit(1);
}));
