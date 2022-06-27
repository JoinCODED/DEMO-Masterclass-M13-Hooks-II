import { useState } from "react";

import { AwesomeSchema } from "../schemas";

export const useAwesomeData = () => {
  const [awesome, setAwesome] = useState<AwesomeSchema>();
  const [edit, setEdit] = useState(false);

  const onToggle = () => {
    setEdit(!edit);
  };

  const onSubmit = (data: AwesomeSchema) => {
    setAwesome(data);
    setEdit(false);
  };

  return { awesome, edit, onToggle, onSubmit };
};

export type UseAwesomeData = ReturnType<typeof useAwesomeData>;
