import * as yup from "yup";

export const personSchema = yup.object({
  name: yup.string().required().label("Name"),
  age: yup
    .number()
    .typeError("${path} must be a valid number")
    .required()
    .label("Age"),
});

export type PersonSchema = yup.InferType<typeof personSchema>;
