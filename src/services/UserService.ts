// services/UserService.ts
import { User } from "next-auth";
import { IUserService } from "./IUserService";
import { prisma } from "@/app/api/prisma.db";
import isSame from "./IsSame";
import { sign } from "./JwtSignVerify";

const secret = process.env.NEXTAUTH_SECRET || "secret";

export class InMemoryUserService implements IUserService {
  async signInCredentials(email: string, password: string): Promise<User | null> {
    if (!email || !password) return null;
    const user = await prisma.user.findUnique({
    where: {
        email,
    },
    });

    if (!user) return null;

    const matchPassword = await isSame(password, user.password);

    if (!matchPassword) return null;

    const accessToken = await sign(JSON.stringify({id: user.id}), secret)

    const newUser = {
    ...user,
    accessToken,
    roles: user.role,
    password: undefined,
    };

    return newUser;
  }
}

export const userService = new InMemoryUserService();