import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(4, { message: "name must be at least 4 characters" }),
  email: z.string().email({ message: "email is not valid" }),
  password: z
    .string()
    .min(4, { message: "password must be at least 4 characters" })
    .max(100, { message: "password can not exceed 100 characters" })
    .refine((password) => password.match(/[0-9]/), {
      message: "password must at least contain 1 number",
    })
    .refine((password) => password.match(/[A-Z]/), {
      message: "password must at least contain 1 uppercase letter",
    })
    .refine((password) => password.match(/[a-z]/), {
      message: "password must at least contain 1 lowercase letter",
    })
    .refine((password) => password.match(/[!@#$%^&*(),.?":{}|<>]/), {
      message: "password must at least contain 1 symbol",
    }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "email is not valid" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" })
    .max(100, { message: "password can not exceed 100 characters" })
    .refine((password) => password.match(/[0-9]/), {
      message: "password must at least contain 1 number",
    })
    .refine((password) => password.match(/[A-Z]/), {
      message: "password must at least contain 1 uppercase letter",
    })
    .refine((password) => password.match(/[a-z]/), {
      message: "password must at least contain 1 lowercase letter",
    })
    .refine((password) => password.match(/[!@#$%^&*(),.?":{}|<>]/), {
      message: "password must at least contain 1 symbol",
    }),
});

export const forgetPasswordSchema = z.object({
  email: z.string().email({ message: "email is not valid" }),
});

export const codeSchema = z.object({
  code: z.number().min(6, { message: "code must be at least 6 characters" }),
});

export const resetPasswordSchema = z.object({
  oldPassword: z
    .string()
    .min(8, { message: "password must be at least 8 characters" })
    .max(100, { message: "password can not exceed 100 characters" })
    .refine((password) => password.match(/[0-9]/), {
      message: "password must at least contain 1 number",
    })
    .refine((password) => password.match(/[A-Z]/), {
      message: "password must at least contain 1 uppercase letter",
    })
    .refine((password) => password.match(/[a-z]/), {
      message: "password must at least contain 1 lowercase letter",
    })
    .refine((password) => password.match(/[!@#$%^&*(),.?":{}|<>]/), {
      message: "password must at least contain 1 symbol",
    }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" })
    .max(100, { message: "password can not exceed 100 characters" })
    .refine((password) => password.match(/[0-9]/), {
      message: "password must at least contain 1 number",
    })
    .refine((password) => password.match(/[A-Z]/), {
      message: "password must at least contain 1 uppercase letter",
    })
    .refine((password) => password.match(/[a-z]/), {
      message: "password must at least contain 1 lowercase letter",
    })
    .refine((password) => password.match(/[!@#$%^&*(),.?":{}|<>]/), {
      message: "password must at least contain 1 symbol",
    }),

  confirmPassword: z
    .string()
    .min(8, { message: "password must be at least 8 characters" })
    .max(100, { message: "password can not exceed 100 characters" })
    .refine((password) => password.match(/[0-9]/), {
      message: "password must at least contain 1 number",
    })
    .refine((password) => password.match(/[A-Z]/), {
      message: "password must at least contain 1 uppercase letter",
    })
    .refine((password) => password.match(/[a-z]/), {
      message: "password must at least contain 1 lowercase letter",
    })
    .refine((password) => password.match(/[!@#$%^&*(),.?":{}|<>]/), {
      message: "password must at least contain 1 symbol",
    }),
});
