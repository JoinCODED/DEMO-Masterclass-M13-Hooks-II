import clsx from "clsx";
import React from "react";

import classes from "./style.module.scss";

type InputProps = {
  error?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value: any;
  type?: string;
};

const Input = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { error, onChange, onBlur, name, type, value } = props;
    return (
      <>
        <input
          className={clsx({
            [classes.input]: true,
            [classes.error]: error != null,
          })}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          type={type}
          value={value}
        />
        {error && <span className={classes.errorText}>{error}</span>}
      </>
    );
  }
);

export default Input;
