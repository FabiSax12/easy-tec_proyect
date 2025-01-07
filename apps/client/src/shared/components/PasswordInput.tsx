import { useState } from "react"
import { Input, InputProps } from "@nextui-org/react"
import { BsEye, BsEyeSlash } from "react-icons/bs"

export const PasswordInput = (props: InputProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return <Input
    type={isVisible ? "text" : "password"}
    endContent={
      <button
        aria-label="toggle password visibility"
        type="button"
        className="focus:outline-none"
        onClick={toggleVisibility}
      >
        {isVisible ? (
          <BsEye className="text-2xl text-default-400 pointer-events-none" />
        ) : (
          <BsEyeSlash className="text-2xl text-default-400 pointer-events-none" />
        )}
      </button>
    }
    {...props}
  />
}