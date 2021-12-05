import styles from "../../styles/Events.module.css"
import Head from 'next/head'
import Link from "next/link"

export  const getStaticProps= async() => {
     const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
//     this gives an object to use it in the component down we need to return it

return{
     props: { events: data}
}

// the return returns an object props. the props object have a key value element which should have any key with the value we got from fetch
// to be able to use this in the component we need to pass a  destructured prop { events } that is comming from this function 
     
// map function go throught each elemnt and fire a function at each index
// name the index before arrow 
// this returns a template and the root elemnet inside it should have a key 

// dynamic href link
//<Link href={'/events/'+event.id} key={event.id}>

}

const Events = ({  events  }) => {
     return ( 
             <>
               <Head>
                    <title> Events Page</title>
                    <meta name='about' description='Hello Event ' />
               </Head>
          <div>
               <h1> Events</h1>
               {events.map(event =>(
                    <Link href={'/events/'+event.id} key={event.id}>
                         <a className={styles.single}>
                         <h3>{event.name}</h3>
                         </a>
                    </Link>
               ))}
               
          </div>
          </>
      );
}
 
export default Events;

