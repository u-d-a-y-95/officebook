import { InputErrorProps } from "./index.type";

export const InputError = ({ error }: InputErrorProps) => {
  if (!error) return null;
  return (
    <span className="text-sm italic text-[#ff4d4f] font-semibold">
      * {error.message}
    </span>
  );
};
