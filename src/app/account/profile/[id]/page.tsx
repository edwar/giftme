import Container from "@/components/container";
import { headers } from 'next/headers';

async function getData(id:string, token: string) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    "Authorization": `${token}`
  })  

  const res = await fetch(`/api/profile/${id}`, {
    headers
  })

  return res.json()
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const { id } = params
  const headersList = headers();
  const token = headersList.get('Authorization') ?? '';
  const data = await getData(id, token)
  return (
    <Container className="flex py-10 md:px-10 lg:px-32 2xl:px-96">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  )
}
