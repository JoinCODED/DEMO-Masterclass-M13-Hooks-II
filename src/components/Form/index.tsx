import { Controller } from "react-hook-form";

import Input from "../Input";
import { usePersonSchema } from "./hooks";
import classes from "./style.module.scss";

const Form = () => {
  const { control, onSubmit } = usePersonSchema();

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={onSubmit} noValidate>
        <h1 className={classes.title}>My Awesome Form</h1>
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="age"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <input className={classes.submitBtn} type="submit" />
      </form>
    </div>
  );
};

export default Form;
