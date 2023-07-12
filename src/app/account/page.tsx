'use client'
import Card from "@/components/Card";
import Page from "@/components/Page";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CardItem from "./CardItem";
import User from "@/components/Icons/User";
import Lock from "@/components/Icons/Lock";
import CreditCard from "@/components/Icons/CreditCard";

export default function RegisterPage() {
  const { data: session } = useSession();
  return (
    <Page className="flex flex-col gap-10 items-center py-10 px-4 md:px-96">
      <Card>
        <Image
          width={64}
          height={64}
          className="w-16 h-16 rounded-full border-gray-400 border-[0.5px]"
          src="/user.webp"
          alt="user photo"
        />
        <div className="flex flex-col w-full">
          <div className="text-2xl font-poppins font-bold text-gray-700">{session?.user?.name}</div>
          <div className="text-md font-poppins font-light text-gray-400">{session?.user?.email}</div>
        </div>
      </Card>
      <Card className="flex-col justify-between px-0">
        <CardItem onClick={() => console.log("Click")} title="Mis datos" subtitle="Información general">
          <User className="w-12 h-12 text-gray-400" />
        </CardItem>
        <CardItem title="Seguridad" subtitle="Controla tu privacidad">
          <Lock className="w-12 h-12 text-gray-400" />
        </CardItem>
        <CardItem title="Mis tarjetas" subtitle="Trajetas guardadas en tu cuenta.">
          <CreditCard className="w-12 h-12 text-gray-400" />
        </CardItem>
      </Card>
    </Page>
  );
}
