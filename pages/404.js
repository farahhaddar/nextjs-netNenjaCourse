import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

     const NotFound = () => {
          const router = useRouter()

          useEffect(() => {
               setTimeout(() => {
                    // router.go(-1)
                    // router.go(1)
                    router.push('/')
               }, 3000)
          }, [])
     return ( 
          <div className='not-found'>
           <h1>oopssssss...</h1>
           <h2>the page cannot be found</h2>
           <p>Go back to the home page <Link href='/'><a>Home</a></Link></p>
          </div>
      );
}
 
export default NotFound;