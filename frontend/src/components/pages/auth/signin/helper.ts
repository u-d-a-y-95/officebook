import z from "zod";

export const signinFormDefaultvalue = {
  email: "",
  password: "",
};
export const signinFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password can't be empty"),
});
