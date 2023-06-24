"use client";

import ButtonDark from "@/components/ButtonDark";
import ButtonLight from "@/components/ButtonLight";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const RegisterForm = () => {
  const { back, replace } = useRouter();
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState({
    "name": "",
    "email": "",
    "password": "",
    "confirmPassword": ""
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: formValues.email,
          password: formValues.password,
          name: formValues.name
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      replace('/login')
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
      className="flex flex-col gap-3 container mx-auto max-w-md"
    >
      <Input
        id="name"
        type="name"
        label="Nombre completo"
        placeholder="Nombre completo"
        name="name"
        required
        value={formValues.name}
        onChange={handleChange}
      />
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
      <div className="flex flex-col gap-1">
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
        <Input
          id="confirmPassword"
          type="password"
          label="Confirmar contraseña"
          placeholder="Confirmar contraseña"
          name="confirmPassword"
          required
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2 min-w-full">
        <ButtonDark type="submit" disabled={loading}>
          {loading ? "loading..." : "Registrar"}
        </ButtonDark>
        <ButtonLight onClick={back} disabled={loading}>Atras</ButtonLight>
      </div>
    </form>
  );
};
