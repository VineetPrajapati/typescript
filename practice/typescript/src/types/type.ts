type User = {
  id: number;
  name: string;
  email: string;
};

type Admin = User & {
  role: string;
  lastLogin: Date;
};
export { type User, type Admin };
