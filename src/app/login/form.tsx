"use client";

import ButtonDark from "@/components/ButtonDark";
import ButtonLight from "@/components/ButtonLight";
import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const LoginForm = () => {
  const { back, replace } = useRouter();
  const initialValue = {
    email: "",
    password: "",
  }
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState(initialValue);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formValues
    setLoading(true);
    try {
      const result = await signIn('credentials', { redirect: false, email, password });
      setLoading(false);
      if(result?.error) {
        alert(result.error)
        setFormValues(initialValue)
      } else {
        replace('/')
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 container mx-auto max-w-md"
    >
      <Input
        id="email"
        type="email"
        label="Correo electronico"
        placeholder="Correo electronico"
        name="email"
        required
        value={formValues.email}
        onChange={handleChange}
      />
      <Input
        id="password"
        type="password"
        label="Contraseña"
        placeholder="Contraseña"
        name="password"
        required
        value={formValues.password}
        onChange={handleChange}
      />
      <div className="flex gap-2 min-w-full">
        <ButtonDark type="submit" disabled={loading}>
          {loading ? "loading..." : "Iniciar sesión"}
        </ButtonDark>
        <ButtonLight onClick={back} disabled={loading}>Atras</ButtonLight>
      </div>
    </form>
  );
};
