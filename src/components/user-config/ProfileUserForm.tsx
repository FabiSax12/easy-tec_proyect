import { User } from "next-auth"
import { carriersOptions } from "@/data/schedule-options"
import { Select } from "@/components"
import { Input } from "@nextui-org/react"

interface FormData {
  name: string;
  lastname: string;
  email: string;
  carrier: string | null;
  profileImage: string;
}

interface Props {
  user: User;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSaveChanges: (e: React.FormEvent) => Promise<void>;
}

const formFields: { label: string, key: keyof Omit<FormData, "profileImage"> }[] = [
  { label: "Nombre", key: "name" },
  { label: "Apellido", key: "lastname" },
  { label: "Correo", key: "email" },
  { label: "Carrera", key: "carrier" }
]

export const ProfileUserForm = ({ user, formData, setFormData, onSaveChanges }: Props) => {
  return <form id="user-data" onSubmit={onSaveChanges} className="grid grid-cols-2 w-full gap-4">
    {formFields.map(({ label, key }) => {
      if (key === "carrier") return (
        <Select
          key={key}
          options={Object.values(carriersOptions).map(carrier => ({ label: carrier.name, value: carrier.name }))}
          variant="bordered"
          label="Carrera"
          labelPlacement="outside"
          placeholder="Seleccione una carrera"
          selectedKeys={[formData.carrier as string]}
          onChange={e => setFormData(prevState => ({ ...prevState, carrier: e.target.value }))}
          color={formData.carrier !== user.carrier ? "warning" : "default"}
        />
      )

      return <Input
        isDisabled={key === "email"}
        key={key}
        variant="bordered"
        labelPlacement="outside"
        label={label}
        value={formData[key] as string}
        onChange={e => setFormData(prevState => ({ ...prevState, [key]: e.target.value }))}
        color={formData[key] !== user[key] ? "warning" : "default"}
      />
    })}
  </form>
}
