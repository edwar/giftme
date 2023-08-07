"use client";

import ButtonDark from "@/components/ui/button-dark";
import ButtonLight from "@/components/ui/button-light";
import { DatePicker } from "@/components/ui/date-picker";
import Input from "@/components/ui/input";
import Select, { Selected } from "@/components/ui/select";
import TextArea from "@/components/ui/text-area";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface Profile {
  id: string;
  bio?: string;
  image?: string;
  birthdate: Date;
  phoneCodeId?: string;
  phone?: string;
  documentTypeId?: string;
  documentNumber?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  data: Data[];
}

interface Data {
  label: string;
  value: string;
}
interface User {
  name: string;
  email: string;
}
export default function Form({
  bio,
  image,
  birthdate,
  phoneCodeId,
  phone,
  documentTypeId,
  documentNumber,
  data,
  user: { email, name },
}: Profile) {
  const { back } = useRouter();
  const initialValue = {
    email,
    name,
    bio,
    image,
    birthdate,
    phoneCodeId,
    phone,
    documentTypeId,
    documentNumber,
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {
      email,
      name,
      bio,
      image,
      birthdate,
      phoneCodeId,
      phone,
      documentTypeId,
      documentNumber,
    } = formValues;
    setLoading(true);
    try {
      const result = { error: true };
      setLoading(false);
      if (result?.error) {
        alert(result.error);
        setFormValues(initialValue);
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelect = ({ name, value }: Selected) => {
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <form
      onSubmit={onSubmit}
      className="h-full grid grid-cols-6 gap-4 container mx-auto max-w-3xl"
    >
      <div className="flex bg-transparent rounded-full col-span-6 justify-center items-center">
        <div className="relative">
          <div
            onClick={() => {}}
            className="absolute bg-white rounded-full bottom-0 right-0 cursor-pointer"
          >
            <div className="flex w-10 h-10 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </div>
          </div>
          <Image
            className="w-28 h-28 rounded-full border-solid border-2 border-gray-400"
            width={112}
            height={112}
            alt="image profile"
            src={formValues.image ?? "/user.webp"}
          />
        </div>
      </div>
      <div className="col-span-3">
        <Input
          id="name"
          type="text"
          label="Nombre completo"
          placeholder="Nombre completo"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-3">
        <Input
          id="email"
          type="email"
          label="Correo electronico"
          placeholder="Correo electronico"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-3">
        <Select
          value={formValues.documentTypeId ? formValues.documentTypeId: '' }
          name="documentTypeId"
          onSelect={handleSelect}
          label="Tipo de documento"
          placeholder="Selecciona"
          data={data}
        />
      </div>
      <div className="col-span-3">
        <Input
          id="documentNumber"
          type="number"
          label="Número de documento"
          placeholder="Número de documento"
          name="documentNumber"
          value={formValues.documentNumber}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-3">
        <DatePicker
          label="Fecha de nacimiento"
          setterDate={(value: Date) =>
            setFormValues({ ...formValues, birthdate: value })
          }
          value={new Date(formValues.birthdate)}
        />
      </div>
      <div className="col-span-1">
        <Input
          id="phoneCodeId"
          type="number"
          label="Código"
          placeholder="Codigo"
          name="phoneCodeId"
          value={formValues.phoneCodeId}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-2">
        <Input
          id="phone"
          type="number"
          label="Teléfono"
          placeholder="Teléfono"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6">
        <TextArea
          id="bio"
          type="text"
          label="Biografia"
          placeholder="Biografia"
          name="bio"
          value={formValues.bio}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div className="flex col-span-6 gap-2 min-w-full">
        <ButtonDark type="submit" disabled={loading}>
          {loading ? "loading..." : "Actualizar"}
        </ButtonDark>
        <ButtonLight onClick={back} disabled={loading}>
          Atras
        </ButtonLight>
      </div>
    </form>
  );
}
