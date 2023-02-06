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

// src/types/AccountType.ts
var AccountType_exports = {};
__export(AccountType_exports, {
  default: () => AccountType_default
});
module.exports = __toCommonJS(AccountType_exports);
var AccountType = /* @__PURE__ */ ((AccountType2) => {
  AccountType2[AccountType2["Asset"] = 0] = "Asset";
  AccountType2[AccountType2["Liability"] = 1] = "Liability";
  AccountType2[AccountType2["Equity"] = 2] = "Equity";
  return AccountType2;
})(AccountType || {});
var AccountType_default = AccountType;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
