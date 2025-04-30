import { z } from "zod";

export const registerUserformSchema = z
  .object({
    username: z
      .string()
      .min(6, { message: "Username must be at least 6 characters long." })
      .trim(),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[a-z]/, { message: "Contain at least one lowercase letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirmPassword: z.string().transform((pwd) => pwd.trim()),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords don't match.",
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterUserForm = z.infer<typeof registerUserformSchema>;

export type RegisterUserState = {
  errors?: {
    username?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

export const loginUserformSchema = z.object({
  username: z
    .string()
    .min(6, { message: "Username must be at leaast 6 characters long." })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[a-z]/, { message: "Contain at least one lowercase letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export type LoginUserForm = z.infer<typeof loginUserformSchema>;

export type LoginUserState = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string | null;
};

export type SessionPayload = {
  userId: string;
  expiresAt: Date;
};
