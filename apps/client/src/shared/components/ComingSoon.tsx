import { Link } from "react-router"
import { Button, Image } from "@easy-tec/ui"
import { LuArrowLeft, LuConstruction } from "react-icons/lu"

export const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="w-full max-w-md mb-8">
        <Image
          src="https://media2.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=6c09b9527gjnbj3faypww6q5fgcy834alimgm4czxve1lpc7&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Construcción en progreso"
          width={400}
          height={200}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <LuConstruction className="w-24 h-24 mb-8 text-primary" />
      <h1 className="text-4xl font-bold mb-4 text-center">En Construcción</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Estamos trabajando duro para traerte algo increíble. ¡Vuelve pronto!
      </p>
      <Link to="/">
        <Button className="flex items-center">
          <LuArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Button>
      </Link>
    </div>
  )
}