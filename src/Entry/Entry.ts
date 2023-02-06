import { prisma } from "../db";
import type Entry from "../types/Entry";

async function createEntry(
  debitedId: number,
  creditedId: number,
  amount: number,
  description: string,
  date: Date
): Promise<Entry> {
  const entry: Entry = await prisma.entry.create({
    data: {
      debited: { connect: { id: debitedId } },
      credited: { connect: { id: creditedId } },
      amount,
      description,
      date,
    },
  });
  return entry;
}

async function deleteEntry(id: number) {
  await prisma.entry.delete({ where: { id } });
}

async function listEntries(): Promise<Entry[]> {
  const entries: Entry[] = await prisma.entry.findMany({
    orderBy: { date: "desc" },
  });
  return entries;
}

export { createEntry, deleteEntry, listEntries };
