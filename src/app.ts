import { prisma } from "./db";
import AccountType from "./types/AccountType";
import type Account from "./types/Account";
import type Entry from "./types/Entry";
import { createAccount, deleteAccount, listAccounts } from "./Account/Account";
import { createEntry, deleteEntry, listEntries } from "./Entry/Entry";

async function main() {
  const cash: Account = await createAccount("cash", AccountType.Asset);
  const bankDebt: Account = await createAccount("bank debt", AccountType.Liability);
  const assets: Account[] = await listAccounts(AccountType.Asset);
  const liabilities: Account[] = await listAccounts(AccountType.Liability);
  const entry: Entry = await createEntry(cash.id, bankDebt.id, 500.0, "loan to the bank", new Date());

  const entries: Entry[] = await listEntries();
  console.log(entries);
  console.log(assets);
  console.log(liabilities);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
