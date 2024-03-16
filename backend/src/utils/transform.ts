import { Transform } from 'class-transformer';

export const Trim = () => {
  return Transform(({ value }) => value.trim());
};
