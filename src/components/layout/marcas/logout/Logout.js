import React from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import style from "./Logout.module.css";
import { Link, ListItem, Button } from "@material-ui/core";

export default props => {
	const user = useUser();
	const firebase = useFirebaseApp();

	const style = {
		textDecoration: "none"
	};

	const logout = async () => {
		if (window.confirm("¿Está seguro que quiere cerrar sesión?")) {
			await firebase.auth().signOut();
		}
	};

	return (
		<div>
			{user && (
				<Button style={style} onClick={logout}>
					Cerrar sesión
				</Button>
			) //componente principal
			}
		</div>
	);
};
