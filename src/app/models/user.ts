import { Role } from "./roles";

export class iUser {
    id: number;
    address: string;
    email: string;
    username: string;
    phone: string;
    name: {
      firstname: string;
      lastname: string;
    };
    role: Role;
  }