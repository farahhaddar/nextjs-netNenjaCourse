import Head from 'next/head'
// at build time next knows how many pages
//  to prerender and build static files for a build time
// but doesnt know how many pages to build for our dynamic routes
// so we need to tell him by using a static path function as below:
// the return has a paths proparty that is an array of objects and each object represents a  route.
// in each object we should define  the routes paramters like id name .. paths:[{params:{id:1},{name:farah}}]
// another property in this function is the fallback that gives an error when the user try to access an invalid route
// if set to false it will give 404 page or we can define a fall back pages.

export const getStaticPaths= async() =>{

          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await res.json();
// go through every returend element  and return an object to the array 
         const paths = data.map(event=>{
           return {
                params:{id: event.id.toString() }
           }
         })

          return {
           paths:paths,
           fallback:false,
          }
     
}

// now we have told next to create the routes but we need to fetch each single item and path it to the component below to get the data 
// here nextjs will run the function n times according to the number of routes it generates in the function above 
// the only problem we have is how to get our id 
//  this function accept a context object from the paths function to get the id
// then we have to fetch again each id 

export const getStaticProps = async (context) => {
     const id = context.params.id;
     const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id);
     const data = await res.json();

     return {
          props: { event: data }
     }



}


const Details = ({ event }) => {
     return (
           <>
               <Head>
                    <title> {event.name}| Details </title>
                    <meta name='{event.name}' description='Hello {event.name} ' />
               </Head>
          <div>
               <h1>{ event.name }</h1>
               <h2>{event.username}</h2>
               <p>{event.email}</p>
               <p>{event.address.city}</p>
               <p>{event.address.street}</p>
               <p>{event.address.suite}</p>
               <p>{event.address.zipcode}</p>
               <p>{event.address.geo.lat}</p>
               <p>{event.address.geo.lang}</p>
               <p>{event.email}</p>
               <p>{event.phone}</p>
               <p>{event.website}</p>
               <p>{event.company.name}</p>
               <p>{event.company.catchPhrase}</p>
               <p>{event.company.bs}</p>
          </div>
          </>
       );
}
 
export default Details;