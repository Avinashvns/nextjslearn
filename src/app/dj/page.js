
import getApi from '../../../services/getApi'


export default async function DJ() {
    const apikey = "http://localhost:3000/api/dj";
    const data = await getApi(apikey);
    console.log(data)

    return (
        <div>
            <h1>DJ List In Varanasi</h1>

            <br />
            <table style={{ width: '100%', border: '3px solid red', padding: '10px', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Owner Name</th>
                        <th>Place</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        data.map((item, index) => (
                            <tr key={item.index} >
                                <td>{item.id}</td>
                                <td>{item.dj_name}</td>
                                <td>{item.owner}</td>
                                <td>{item.place}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}