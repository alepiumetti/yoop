import React , {useState , useEffect } from 'react'
import * as firebase from 'firebase'

 
function ImagenMarca(props) {

	const [url , setURL] = useState()

	
  const getURL = async(path) => {
	let imgRef = firebase.storage().ref(path);
	try {
		let url = await imgRef.getDownloadURL();
		setURL(url)
	} catch (error) {
		// A full list of error codes is available at
		// https://firebase.google.com/docs/storage/web/handle-errors
		switch (error.code) {
			case "storage/object-not-found":
				console.log("File doesn't exist");
				break;

			case "storage/unauthorized":
				console.log(
					"User doesn't have permission to access the object"
				);
				break;

			case "storage/canceled":
				console.log("User canceled the upload");
				break;

			default:
				console.log("default");
				break;

			case "storage/unknown":
				console.log(
					"Unknown error occurred, inspect the server response"
				);
				break;
		}
	}
}

	useEffect(() => {
		getURL(props.src)
	}, [url])
  
    return (
        
					<img alt={`imagen ${props.alt}`} src={url} style={{ width:"275px"}}/>
        
    )
}

export default ImagenMarca
