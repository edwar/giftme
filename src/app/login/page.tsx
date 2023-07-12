import Image from "next/image";
import { LoginForm } from "./form";
import Page from "@/components/Page";

export default function RegisterPage() {
  return (
    <Page>
      <div className="flex flex-col lg:flex-row">
        <div className="hidden min-h-screen w-full lg:flex lg:flex-col justify-center items-center gap-5 p-5">
          <Image src='/login/login.svg' className="w-auto h-full" width={648} height={523} alt="Imagen de login"/>
        </div>
        <div className="min-h-screen w-full flex flex-col justify-center items-center gap-5 p-5">
          <h1 className="font-poppins text-3xl font-bold">Iniciar sesión</h1>
          <LoginForm />
        </div>
      </div>
    </Page>
  );
}
