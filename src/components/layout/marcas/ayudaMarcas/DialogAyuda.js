import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import HelpIcon from "@material-ui/icons/Help";
import { Tooltip } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="¿Necesitás ayuda?" placement="right" arrow>
        <IconButton aria-label="ayuda" onClick={handleClickOpen}>
          <HelpIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ayuda
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Para buscar si un usuario está al día tenés que ingresar su nombre y
            apellido y/o el DNI y apretar en buscar.
          </Typography>
          <Typography gutterBottom>
            El nombre y apellido podés ingresarlo en minusculas o mayusculas,
            pero si o si tenés que respetar las letras y si tiene tildes.
          </Typography>
          <Typography gutterBottom>
            <b>
              Si el usuario está al día con los pagos te aparecerá sus datos con
              un tilde, de lo contrario, aparecerá una cruz
            </b>
          </Typography>
          <Typography gutterBottom>
            Si tenés más preguntas podés consultarnos directamente por{" "}
            <a
              style={{ color: "#115bcc" }}
              href="http://wpp-redirect.herokuapp.com/go/?p=5493413717471&m=Hola!%20Necesito%20ayuda%20para%20buscar%20si%20un%20usuario%20est%C3%A1%20al%20d%C3%ADa."
            >
              WhatsApp
            </a>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            ¡Gracias!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
