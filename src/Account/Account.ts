import { prisma } from "../db";
import AccountType from "../types/AccountType";
import type Account from "../types/Account";

async function createAccount(name: string, type: AccountType): Promise<Account> {
  const account: Account = await prisma.account.create({ data: { name, balance: 0.0, type } });
  return account;
}

async function deleteAccount(id: number) {
  await prisma.account.delete({ where: { id } });
}

async function listAccounts(type: AccountType): Promise<Account[]> {
  const accounts: Account[] = await prisma.account.findMany({
    where: { type },
    orderBy: { name: "asc" },
  });
  return accounts;
}

export { createAccount, deleteAccount, listAccounts };
