import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import classes from "./App.module.scss";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

const stringify = (obj: Record<string, any>): string =>
  JSON.stringify(obj, (key, value) => (key === "ref" ? "" : value));

const App = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className={classes.container}>
      <form
        className={classes.form}
        onSubmit={handleSubmit((d) => console.log(d))}
        noValidate
      >
        <h1 className={classes.title}>My Awesome Form</h1>
        <input className={classes.input} {...register("name")} />
        <input className={classes.input} {...register("age")} />
        <input className={classes.submitBtn} type="submit" />
      </form>
      <pre className={classes.code}>{stringify(formState.errors)}</pre>
    </div>
  );
};

export default App;
