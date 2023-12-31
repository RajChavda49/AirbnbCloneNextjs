import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  | "createdAt"
  | "updatedAt"
  | ("emailVerified" & {
      createdAt: string;
      upadatedAt: string;
      emailVerified: string | null;
    })
>;
