import { Controller } from "react-hook-form";

import Input from "../../components/Input";
import { useAwesomeForm } from "./hooks";
import { AwesomeSchema } from "./schemas";
import classes from "./style.module.scss";

type AwesomeFormProps = {
  defaultValues?: AwesomeSchema;
  onSubmit: (data: AwesomeSchema) => void;
};

const AwesomeForm = (props: AwesomeFormProps) => {
  const { control, handleSubmit } = useAwesomeForm(props.defaultValues);
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit(props.onSubmit)}>
        <h1 className={classes.title}>My Awesome Form</h1>
        <Controller
          name="person.firstName"
          control={control}
          render={({ field, fieldState }) => (
            <Input {...field} error={fieldState.error?.message} />
          )}
        />
        <Controller
          name="person.lastName"
          control={control}
          render={({ field, fieldState }) => (
            <Input {...field} error={fieldState.error?.message} />
          )}
        />
        <Controller
          name="pet.name"
          control={control}
          render={({ field, fieldState }) => (
            <Input {...field} error={fieldState.error?.message} />
          )}
        />
        <input className={classes.submitBtn} type="submit" />
      </form>
    </div>
  );
};

export default AwesomeForm;
