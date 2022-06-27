import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { AwesomeSchema, awesomeSchema } from "../schemas";

export const useAwesomeForm = (defaultValues?: AwesomeSchema) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(awesomeSchema),
    mode: "onBlur",
    defaultValues,
  });

  return { control, handleSubmit };
};

export type UseAwesomeForm = ReturnType<typeof useAwesomeForm>;
