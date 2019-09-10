import * as React from "react";
import styles from "./index.module.scss";
import { CenteredBox } from "../../layouts/centered-box";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { HyperInput } from "../../form/hyperInput";
import { HyperField } from "../../form/hyperField";

export const Login: React.FunctionComponent = () => {
  function onSubmit(...args: any) {
    console.log(args);
  }

  return (
    <CenteredBox>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <HyperField label={"e-Mail"}>
                <Field name={"e-mail"} component={HyperInput} />
              </HyperField>
              <div className="field">
                <label htmlFor="" className="label">
                  Password
                </label>
                <div className="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    className="input"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="checkbox">
                  <input type="checkbox" />
                  <span className={styles.rememberMeText}>Remember me</span>
                </label>
              </div>
              <div className="buttons is-right">
                <Link to={"/signup"} className={"button"}>
                  Create account
                </Link>
                <input
                  type="submit"
                  className="button is-primary"
                  value="Login"
                />
              </div>
            </form>
          );
        }}
      </Form>
    </CenteredBox>
  );
};
