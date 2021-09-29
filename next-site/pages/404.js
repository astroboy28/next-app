import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) this method can be used to redirect or go back to the last visited page or (1) one page forward
            router.push('/'); // this method redirects a user to the homepage in 3 seconds.
        }, 3000)
    }, [])

    return ( 
        <div className="notFound">
            <h1>Oooopppss..</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link>.</p>
        </div>
     );
}
 
export default NotFound;