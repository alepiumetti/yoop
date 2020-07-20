import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router'
import * as firebase from 'firebase'
import { Grid, Typography } from '@material-ui/core'
import style from './MarcaAmigaStyle.module.css'
import ImagenMarca from './ImagenMarca'


function MarcasAmigas(props) {

    const [id , setID] = useState("")
    const [marca , setMarca] = useState({
        marca:"",
        badge:"",
        cond:"",
        desc:"",
        email:"",
        fb:"",
        ig:"",
        tel:"",
        vip:"",
        web:"",
        wapp:0,
        cel:"",
        tel:"",
        })



    const database = firebase.database()
    let url = useParams()

    useEffect(() => {
        getURL(url)
        
    }, [])

    const getURL = (url) =>{
        console.log(url)
        getMarca(url.id)

    }    

    const getMarca = async (id) =>{
        let cleanID = id.slice(3)
        let marca = ""
        setID(cleanID)
        database.ref(`marcas/${cleanID}`).on("value",function(snapshot){
                marca = snapshot.val()
                console.log(marca)
                setMarca(marca)
            })
            
            }
        
        console.log(marca)


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} alignContent="center" className={style.titleMarca}>
                    <Typography  variant="h3">
                        {marca.marca}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <ImagenMarca id={marca.id}/>
                </Grid>
                <Grid item xs={6}>
                <p>badge: {marca.badge}</p>
                <p>Condiciones: {marca.cond}</p>
                <p>descuentos: {marca.desc}</p>
                <p>Email: {marca.email}</p> 
                <p>Facebook: {marca.fb}</p>              
                <p>Instagram: {marca.ig}</p>
                <p>tel: {marca.tel}</p>
                <p>vip: {marca.vip}</p>
                <p>web: {marca.web}</p>
                </Grid>

            </Grid>
        </div>

    )
    
}

export default MarcasAmigas
