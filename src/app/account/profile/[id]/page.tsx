import Container from "@/components/container";
import { headers } from 'next/headers';
import Form from './form'

async function getData(id:string, token: string) {
  const url = process.env.NEXTAUTH_URL ?? ''
  const headers = new Headers({
    'Content-Type': 'application/json',
    "Authorization": `${token}`
  })  

  const res = await fetch(`${url}/api/profile/${id}`, {
    headers
  })

  return res.json()
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const { id } = params
  const headersList = headers();
  const token = headersList.get('Authorization') ?? '';
  const { profile } = await getData(id, token)
  return (
    <Container className="flex flex-col py-10 md:px-10 lg:px-32 2xl:px-96">
      <Form {...profile } />
    </Container>
  )
}
