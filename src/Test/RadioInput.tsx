import React from "react";
import { FieldRenderProps } from "react-final-form";

function RadioInput<T extends string | number>({
  input,
  meta,
  ...rest
}: FieldRenderProps<T, any>) {
  return <input type="radio" {...input} {...rest} />;
}

export default RadioInput;
