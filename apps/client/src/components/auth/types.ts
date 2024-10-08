export interface InputsData {
  email: string;
  name: string;
  lastname: string;
  password: string;
  [key: string]: string;
}

type Value = InputsData["email"] | InputsData["name"] | InputsData["lastname"] | InputsData["password"];

export interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  value: Value;
}