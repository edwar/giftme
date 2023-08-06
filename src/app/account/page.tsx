"use client";
import Card from "@/components/ui/card";
import Container from "@/components/container";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CardItem from "./CardItem";
import User from "@/components/Icons/User";
import Lock from "@/components/Icons/Lock";
import CreditCard from "@/components/Icons/CreditCard";
import Link from "next/link";

export default function RegisterPage() {
  const { data: session } = useSession();
  return (
    <Container className="flex flex-col gap-10 items-center py-10 md:px-10 lg:px-32 2xl:px-96">
      <Card className="py-6">
        <Image
          width={64}
          height={64}
          className="w-16 h-16 rounded-full border-gray-400 border-[0.5px]"
          src="/user.webp"
          alt="user photo"
        />
        <div className="flex flex-col w-full">
          <div className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-poppins font-bold text-gray-700">
            {session?.user?.name}
          </div>
          <div className="text-xs md:text-sm xl:text-md font-poppins font-light text-gray-400">
            {session?.user?.email}
          </div>
        </div>
      </Card>
      <Card className="flex-col justify-between xl:px-0">
        <Link className="flex w-full" href={`/account/profile/${session?.user?.id}`}>
          <CardItem className="cursor-pointer pt-6 pb-3" title="Mis datos" subtitle="Información general">
            <User className="w-12 h-12 text-gray-400" />
          </CardItem>
        </Link>
        <CardItem className="cursor-pointer py-3" title="Seguridad" subtitle="Controla tu privacidad">
          <Lock className="w-12 h-12 text-gray-400" />
        </CardItem>
        <CardItem
          className="cursor-pointer pb-6 pt-3"
          title="Mis tarjetas"
          subtitle="Trajetas guardadas en tu cuenta."
        >
          <CreditCard className="w-12 h-12 text-gray-400" />
        </CardItem>
      </Card>
    </Container>
  );
}
