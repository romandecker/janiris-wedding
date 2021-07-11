import React from "react";
import "./App.css";
import { Success } from "./Success";

const password = new Array(10)
  .fill(null)
  .reduce(
    atob,
    "Vm0wd2VHUXhUWGROVldoVFlteEtXRmxVU205V1JsbDNXa1JTVjJKSGVEQlpNM0JIVmpGYWRHVkliRmROYWxaeVZtcEJlRmRIVmtWUmJVWlhWakpvVFZac1ZtRldNVnBXVFZWV2FHVnFRVGs9"
  );

function App() {
  const [formState, setFormState] = React.useState<
    "pristine" | "validating" | "invalid" | "valid"
  >("pristine");

  return (
    <div className="App">
      {formState === "valid" ? (
        <Success />
      ) : (
        <div className="loginForm">
          <h1>Login</h1>
          <form
            className={formState}
            onSubmit={(e) => {
              setFormState("validating");
              const attempt = e.currentTarget.password.value;
              setTimeout(() => {
                setFormState(attempt === password ? "valid" : "invalid");
              }, 500);
              e.preventDefault();
            }}
          >
            <div className="fieldGroup">
              <label htmlFor="password">Password:</label>
              <input id="password" name="password" type="password" />
              {formState === "invalid" && (
                <div className="fieldError">Password invalid. Try again 😛</div>
              )}
            </div>
            <div className="fieldGroup submit">
              <input
                type="submit"
                value={formState === "validating" ? "Logging in..." : "Log in"}
                disabled={formState === "validating"}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
