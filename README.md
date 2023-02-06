# simple-accounting-cli

# Documentation

## Account:

- **type**: 0: asset. 1: liability. 2: equity.
- **debitedEntries**: Entries that occur on the left side of the t-account.
- **creditedEntries**: Entries that occur on the right side of the t-account.

## Entries

- Every entry (or Accounting Seat) contais 2 and only 2 accounts. One of them will be the debited account and the other one will be the credited account.

## Account Example

**Cash Account**

Balance: $1.000

| debit | credit |
| ----- | ------ |
| $500  | $200   |
| $700  |        |

## Entry Example

| **Account** | **Debited Account** | **Credited Account** |
| ----------- | ------------------- | -------------------- |
| cash        | $500                |                      |
| bank debt   |                     | $500                 |
