import getApi from "../../../../services/getApi";


export default async function DJPage({ params }) {
    const apikey = `http://localhost:3000/api/dj/${params.djid}`;
    const datas = await getApi(apikey);
    const dj = datas.data;
    console.log(dj)

    console.log(params)
    console.log("id= ", params.djid)
    console.log("dj id =", dj.id)

    return (
        <div >
            <h1>DJ Single User Data Display</h1>
            <br />
            <br />
            {
                params.djid != dj.id ? "No Data" : <div style={{ display: 'flex', justifyContent: "space-around" }}>
                    <div>
                        <h1>Dj User Id</h1>
                        <h2>{dj.id}</h2>
                    </div>
                    <div>
                        <h1>Dj Name</h1>
                        <h2>{dj.dj_name}</h2>
                    </div>
                    <div>
                        <h1>Dj Owner</h1>
                        <h2>{dj.owner}</h2>
                    </div>
                    <div>
                        <h1>Palce</h1>
                        <h2>{dj.place}</h2>
                    </div>
                    <div>
                        <h1>Dj Price</h1>
                        <h2>{dj.price}</h2>
                    </div>

                </div>
            }


        </div>
    )
}