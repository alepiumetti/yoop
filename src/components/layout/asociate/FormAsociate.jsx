import { Formik, Form, Field } from "formik";
import { TextField, RadioGroup } from "formik-material-ui";
import {
  Radio,
  LinearProgress,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import React from "react";

function FormAsociate(props) {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          nombre: "",
          formaDePago: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Email Inválido";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(
            () => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            },
            500,
            props.meses
          );
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
            <Field
              component={TextField}
              name="nombre"
              type="nombre"
              label="Nombre y Apellido"
            />

            <Field component={RadioGroup} name="formaDePago">
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
