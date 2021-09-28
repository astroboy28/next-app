import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Del List</h1>
            </div> 
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/pages/pageOne"><a>pageOne</a></Link>
            <Link href="/pages"><a>Del List</a></Link>
        </nav>
     );
}
 
export default Navbar;
