import AccountType from "./AccountType";

type Account = {
  id: number;
  name: string;
  balance: number;
  type: AccountType;
};

export default Account;