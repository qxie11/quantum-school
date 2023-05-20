import {
  Controller as AntdController,
  ControllerProps,
  FieldError,
  FieldValues,
  ControllerRenderProps,
} from "react-hook-form";
import { Form } from "antd";
import { isString } from "lodash";

interface Props extends Omit<ControllerProps, "render"> {
  // eslint-disable-next-line no-unused-vars
  getInput: (field: ControllerRenderProps<FieldValues>) => React.ReactNode;
  label: string;
}

const Controller: React.FC<Props> = ({ label, name, control, getInput }) => {
  return (
    <AntdController
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isErrorString = isString(error);
        const hasError = isErrorString || (error as FieldError)?.message;

        return (
          <Form.Item
            label={label}
            validateStatus={!hasError ? "success" : "error"}
            help={
              hasError && (
                <span className="block p-2">
                  {isErrorString ? error : (error as FieldError)?.message}
                </span>
              )
            }
          >
            {getInput(field)}
          </Form.Item>
        );
      }}
    />
  );
};

export default Controller;
