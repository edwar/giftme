'use client'
import Page from "@/components/Page";
import GiftCard from "../../components/GiftCard";
import { data } from "./data";

export default function ShoppingPage() {
    
  return (
    <Page className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full gap-10 py-10">
        {data.map((i) => <GiftCard {...i} owner key={i.id}/>)}
    </Page>
  )
}
