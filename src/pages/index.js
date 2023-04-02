import { useRouter } from 'next/router'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../components/config/firebase'
import { useEffect, useState } from 'react'


export default function Home() {

  const [data, setData] = useState('')
  const router = useRouter()

  const getData = async () => {
    const data = await getDocs(collection(db, 'logins'))
    setData(
      data.docs.map((doc) => ({ ...doc.data() }))
    )
  }
  useEffect(() => {
    getData()
  },[])
  console.log(data)
  return (
    <>
      <h1 className='bg-black'>Home Page</h1>
      <button type="button" onClick={() => router.push('/login')}>Goto Login</button>
    </>
  )
}
