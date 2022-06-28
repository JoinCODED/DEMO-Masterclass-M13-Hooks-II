import clsx from "clsx";
import React from "react";

import classes from "./style.module.scss";

type InputProps = {
  error?: boolean;
  helperText?: string;
} & JSX.IntrinsicElements["input"];

const Input = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { error, helperText, ...rest } = props;

    return (
      <>
        <input
          {...rest}
          className={clsx({ [classes.input]: true, [classes.error]: !!error })}
          ref={ref}
        />
        {helperText && (
          <span className={clsx({ [classes.errorText]: !!error })}>
            {helperText}
          </span>
        )}
      </>
    );
  }
);

export default Input;
