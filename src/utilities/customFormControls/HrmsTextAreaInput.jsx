import React from "react";
import { useField } from "formik";
import { FormTextArea} from "semantic-ui-react";

export default function HrmsTextAreaInput({...props}) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);

  return (
    <FormTextArea
      {...field}
      {...props}
      error={meta.error && meta.touched && meta.error}
    ></FormTextArea>
  );
}
