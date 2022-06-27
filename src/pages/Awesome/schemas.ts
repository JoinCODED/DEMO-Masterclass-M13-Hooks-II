import * as yup from "yup";

export const awesomeSchema = yup.object({
  person: yup.object({
    firstName: yup.string().required().label("First Name"),
    lastName: yup.string().optional().label("Last Name"),
  }),
  pet: yup.object({
    name: yup.string().required().label("Name"),
  }),
});

export type AwesomeSchema = yup.InferType<typeof awesomeSchema>;
