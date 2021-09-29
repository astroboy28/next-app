export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(users => {
        return {    /* after return, if it's an object, use { }, if it's a template(html) use ( ) */
            params: { id: users.id.toString() }
        }
    })

    return {
        paths, // or paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);  // never forget the slash/ at the end of the url
    const data = await res.json();

    return {
        props: { user: data }
    }
}

const DetailsPage = ({ user }) => {
    console.log(user.id)
    return (
        
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.address.city}</p>
         </div>
    )
         
}
 
export default DetailsPage;