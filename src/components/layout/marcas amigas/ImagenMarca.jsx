import React , {useState , useEffect } from 'react'
import * as firebase from 'firebase'

async function getURL(path) {
	let imgRef = firebase.storage().ref(path);
	try {
		let url = await imgRef.getDownloadURL();
		return url;
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

function ImagenMarca(props) {
    let storage = firebase.storage();

    let ref = storage.ref("imgs");
    
    

    console.log("imagen id: ",props.id)

    return (
        <div>
        </div>
    )
}

export default ImagenMarca
