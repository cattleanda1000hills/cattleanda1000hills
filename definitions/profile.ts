import { z } from "zod";

export const createProfileFormSchema = z
  .object({
    fullName: z.string().min(2, { message: "Full Name is required." }).trim(),
    surname: z.string().min(2, { message: "Surname is required." }).trim(),
    idPassportNo: z
      .string()
      .min(2, {
        message: "ID / Passport Number is required.",
      })
      .trim(),
    dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    contactNumber: z
      .string()
      .min(6, {
        message: "Contact Number is required",
      })
      .regex(/[0-9]/, { message: "Contain only number between 0 - 9." })
      .trim(),
    email: z.string(),
    countryOfOrigin: z
      .string()
      .min(6, {
        message: "Country of Origin is required",
      })
      .trim(),
  })
  .superRefine(({ contactNumber }, ctx) => {
    if (contactNumber !== "" && !contactNumber.startsWith("0")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Contact Number must start with 0. E.g 067 123 4545.",
        path: ["contactNumber"],
      });
    }
  });

export type CreateProfileForm = z.infer<typeof createProfileFormSchema>;

export type CreateProfileFormState = {
  errors?: {
    fullName?: string[];
    surname?: string[];
    idPassportNo?: string[];
    dateOfBirth?: string[];
    contactNumber?: string[];
    email?: string[];
    countryOfOrigin?: string[];
  };
  message?: string | null;
} | null;

export type IProfile = {
  fullName: string;
  surname: string;
  idPassportNo: string;
  dateOfBirth: Date;
  contactNumber: string;
  email: string;
  countryOfOrigin: string;
};
