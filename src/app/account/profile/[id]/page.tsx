import Container from "@/components/container";
import { headers } from 'next/headers';
import Form from './form'

const url = process.env.NEXTAUTH_URL ?? ''
async function getData(id:string, token: string) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    "Authorization": `${token}`
  })  

  const res = await fetch(`${url}/api/profile/${id}`, {
    headers
  })

  return res.json()
}

async function getDocumentType(token: string) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    "Authorization": `${token}`
  })

  const res = await fetch(`${url}/api/document/types`, {
    headers
  })

  return res.json()
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  interface DataFetch {
    _id: string;
    name: string;
    code: string;
  }
  const { id } = params
  const headersList = headers();
  const token = headersList.get('Authorization') ?? '';
  const { profile } = await getData(id, token);
  const { data: dataFetch } = await getDocumentType(token);
  dataFetch.unshift({
    _id: '',
    name: 'Selecciones',
    code: ''
  })
  console.log("dataFetch: ", dataFetch)
  const data = dataFetch.map((item: DataFetch) => ({
    label: item.name,
    value: item.code
  }))
  return (
    <Container className="flex flex-col justify-center items-center py-10 md:px-10 lg:px-32 2xl:px-96">
      <Form {...profile } data={data} />
    </Container>
  )
}
