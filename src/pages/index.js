import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <>
     <h1>Home Page</h1>
     <button type="button" onClick={() => router.push('/login')}>Goto Login</button>
    </>
  )
}
