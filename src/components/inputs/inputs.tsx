import { UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage, Fieldset, Label } from "./inputsStyles";
import { InputStyle } from "./inputsStyles";

interface IInputProps {
  register: UseFormRegisterReturn<string>;
  errors?: any;
  label: string;
  type: string;
}
export const Input = ({ register, errors, label, type }: IInputProps) => {
  return (
    <Fieldset>
      <Label htmlFor="">{label}</Label>
      <InputStyle type={type} {...register} />
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </Fieldset>
  );
};
