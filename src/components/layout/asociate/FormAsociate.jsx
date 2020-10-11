import { Formik, Form, Field } from "formik";
import { TextField, RadioGroup } from "formik-material-ui";
import {
  Radio,
  LinearProgress,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import React from "react";
import * as firebase from "firebase";

import moment from "moment";

function FormAsociate(props) {
  const ref = firebase.database().ref("pagos/");

  const redireccionarAPago = (datos) => {
    //datos:
    //datos.email : string
    //datos.fecha: moment()
    //datos.formaDePago: string
    //datos.meses: int
    //datos.nombre: string
    //datos.tel: string

    switch (datos.meses) {
      case 1:
        switch (datos.formaDePago) {
          case "credito":
            window.location = "http://mpago.la/1zyRNuo";
            break;
          case "debito":
            window.location = "https://mpago.la/2dHzUS1";
            break;
          case "efectivo":
            window.location = "https://mpago.la/13xXDd8";
            break;

          default:
            break;
        }
        break;
      case 6:
        switch (datos.formaDePago) {
          case "credito":
            window.location = "http://mpago.la/1BNqudj";
            break;
          case "debito":
            window.location = "https://mpago.la/2C8d8uS";

            break;
          case "efectivo":
            window.location = "https://mpago.la/2gPZcwh";

            break;

          default:
            break;
        }

        break;
      case 12:
        switch (datos.formaDePago) {
          case "credito":
            window.location = "http://mpago.la/11E1t6Y";
            break;
          case "debito":
            window.location = "https://mpago.la/1Hgk67h";
            break;
          case "efectivo":
            window.location = "https://mpago.la/2uJwfcD";
            break;

          default:
            break;
        }

        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          nombre: "",
          formaDePago: "",
          tel: "",
          fecha: moment.utc().format("DD/MM/YYYY, kk:mm:ss"),
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            //validación email
            errors.email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Email Inválido";
          }

          if (!values.tel) {
            //validación teléfono
            errors.tel = "Requerido";
          } else if (!/^[0-9]{10,13}$/.test(values.tel)) {
            errors.tel = "Número de teléfono inválido";
          }

          if (!values.nombre) {
            errors.nombre = "Requerido";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            let datos = { ...values, meses: props.meses };
            ref
              .push(datos, function (error) {
                if (error) {
                  console.log("error", error);
                } else {
                  console.log("Se subió correctamente");
                }
              })
              .then(redireccionarAPago(datos));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="nombre"
              label="Nombre y Apellido"
            />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />

            <Field
              component={TextField}
              type="number"
              name="tel"
              label="Nro de Celular"
            />

            <br />
            <br />

            <Field
              component={RadioGroup}
              name="formaDePago"
              style={{
                paddingLeft: "15px",
              }}
            >
              <FormControlLabel
                value="credito"
                control={<Radio disabled={isSubmitting} />}
                label="Tarjeta de Crédito"
                disabled={isSubmitting}
              />
              <FormControlLabel
                value="debito"
                control={<Radio disabled={isSubmitting} />}
                label="Tarjeta de Débito"
                disabled={isSubmitting}
              />
              <FormControlLabel
                value="efectivo"
                control={<Radio disabled={isSubmitting} />}
                label="RapiPago/PagoFacil"
                disabled={isSubmitting}
              />
            </Field>

            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Pagar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormAsociate;
