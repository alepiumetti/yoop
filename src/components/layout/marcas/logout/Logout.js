import React from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import style from "./Logout.module.css";
import { Link, ListItem, Button, IconButton } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default props => {
	const user = useUser();
	const firebase = useFirebaseApp();

	const style = {
		color:"white"
	};

	const logout = async () => {
		if (window.confirm("¿Está seguro que quiere cerrar sesión?")) {
			await firebase.auth().signOut();
		}
	};

	return (
		<div>
			{user && (
				<IconButton style={style} onClick={logout}>
					<ExitToAppIcon/>
				</IconButton>
			) 
			}
		</div>
	);
};
