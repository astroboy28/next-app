import styles from '../../styles/myStyles.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { fetchUsers: data }
    }
}

const FetchData = ({fetchUsers}) => {
    return ( 
        <div className={styles.container}>
            <h1>Fetching Data</h1>
            {fetchUsers.map(userWatever => (
                <div key={ userWatever.id }> 
                    <a className={styles.single}>
                        <h3>{ userWatever.name }</h3>
                    </a>
                </div>
            ))}
        </div>
     );
}
 
export default FetchData;