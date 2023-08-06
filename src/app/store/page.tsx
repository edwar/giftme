'use client'
import Container from "@/components/container";
import GiftCard from "../../components/ui/gift-card";
import { data } from "./data";

export default function StorePage() {
    
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full gap-10 py-10">
        {data.map((i) => <GiftCard {...i} key={i.id}/>)}
    </Container>
  )
}
