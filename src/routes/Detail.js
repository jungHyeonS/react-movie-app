import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
function Detail(){
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    const [detail, setDetail] = useState({})
    const getDetail = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setDetail(json.data.movie)
        setLoading(false)
        console.log(json)
    }

    useEffect(()=>{
        getDetail()
    },[])
    return (
        <div>
            <h1>Detail</h1>
            {loading ? <h2>Loading</h2> : (
                <div>
                    {detail.title}<br></br>
                    <img src={detail.medium_cover_image}/>
                </div>
            )}
        </div>
    );
}
export default Detail