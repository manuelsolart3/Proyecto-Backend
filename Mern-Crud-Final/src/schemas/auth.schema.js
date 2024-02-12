import { z } from "zod";

export const registerschema = z.object({
  username: z.string({
    required_error: "username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6, {
      message: "la contraseña debe ser minimo de 6 caracteres",
    }),
});

export const loginschema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6, {
      message: "la contraseña debe ser minimo de 6 caracteres",
    }),
});
