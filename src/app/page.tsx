"use client"
import { useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/navigation"
import { Spinner } from "@nextui-org/react"
import {useSession, getSession} from "next-auth/react"
import { Link, Button } from "@nextui-org/react"

interface Props {}

const Page: NextPage<Props> = () => {
  // const router = useRouter()
  
  // const sessionGeting = async () => {
  //   const session = await getSession()
  //   console.log(session)
  //   if (session) router.push("/principal")
  //   else router.push("/auth")
  // }

  // useEffect(()=>{
  //   sessionGeting()
  // }, [])
  
  return <Link href="/auth"><Button variant="bordered" color="primary">Iniciar Sesión</Button></Link>

  // return <div className="w-full h-full flex justify-center items-center">
  //   <Spinner size="lg"/>
  // </div>
}

export default Page