import Head from 'next/head'

const About = () => {
    return ( 
        <> {/* the content must be inside this fragment */}
            <Head> {/* this is the title of the page */}
            <title>This is the About Page</title> 
            <meta name="these are my keywords" content="sample next site"/>  {/* this is the metadata for keywords, etc. */}
            </Head>
            <div>
                <h1>About Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa quo nostrum animi eos asperiores deleniti harum et earum quibusdam!</p>
            </div>
        </>
     );
}
 
export default About;