import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
               {/* <img src="/vercel.svg" />  This is 1 way of using image directly without import Image in next/image */} 
               <Image src="/vercel.svg" width={128} height={77}/> {/* attributes must be declared or it will throw an error. This method makes the image automatically responsive. */}
            </div> 
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/pages/pageOne"><a>pageOne</a></Link>
            <Link href="/pages"><a>Del List</a></Link>
        </nav>
     );
}
 
export default Navbar;
