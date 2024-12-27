export type AuthMode = "login" | "sign-up";

export interface FormData {
  email: string;
  name: string;
  lastname: string;
  password: string;
}

export interface InputsData {
  email: string;
  name: string;
  lastname: string;
  password: string;
  [key: string]: string;
}

export interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  value: keyof FormData;
  autoComplete?: string;
}