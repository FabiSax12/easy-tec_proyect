import {User} from "@nextui-org/react";

interface Props {
  name: string, 
  carrier: string, 
  avatarImage: string
}

export default function UserUI({name, carrier, avatarImage}: Props) {
  return (
    <User   
      name={name}
      description={carrier}
      avatarProps={{
        src: avatarImage
      }}
    />
  );
}
