import React from "react";
import { reduxForm, Field } from "redux-form";

import { renderTextField, validate } from "../../forms/";
import singUpSubmit from "../../forms/submit/singUpSubmit";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Singup = ({
  show,
  close,
  handleSubmit,
  pristine,
  reset,
  submitting,
  meta
}) => {
  return (
    <Dialog open={show} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Singup</DialogTitle>
      <DialogContent>
        <DialogContentText>Create a local account to singup</DialogContentText>
        <form onSubmit={handleSubmit(singUpSubmit)}>
          <div>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              type="email"
            />
          </div>
          <div>
            <Field
              name="password"
              component={renderTextField}
              label="Password"
              type="password"
            />
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </button>
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default reduxForm({
  form: "singup",
  validate
})(Singup);
