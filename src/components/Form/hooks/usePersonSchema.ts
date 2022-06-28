import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { PersonSchema, personSchema } from "../schema";

export const usePersonSchema = (defaultValues?: PersonSchema) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(personSchema),
    mode: "onBlur",
    defaultValues,
  });

  const onSubmit = handleSubmit((d) => {
    alert(JSON.stringify(d));
  });

  return { control, onSubmit };
};

export type UsePersonSchema = ReturnType<typeof usePersonSchema>;
