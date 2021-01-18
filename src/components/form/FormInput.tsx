import React from "react";
import { parseISO } from "date-fns";
import { Input, Form, DatePicker, TimePicker } from "antd";
type FormInputProps = React.HTMLProps<HTMLInputElement> & { label?: string };

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div>
        <Form.Item name={rest.name} label={label}>
          {rest.type === "date" ? (
            <DatePicker />
          ) : rest.type === "time" ? (
            <TimePicker />
          ) : (
            <Input />
          )}
        </Form.Item>
      </div>
    );
  }
);

export default FormInput;
