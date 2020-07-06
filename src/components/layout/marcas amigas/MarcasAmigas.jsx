import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router'


function MarcasAmigas(props) {

    const [id , setID] = useState("")

    let url = useParams()

    useEffect(() => {
        getURL(url)
        
    }, [])

    const getURL = async (url) =>{
        console.log(url)
        await setID(url.id)

    }    
  


    return (
        <div>
            <p>{id}</p>     
        </div>
    )
    
}

export default MarcasAmigas
