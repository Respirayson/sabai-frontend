import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import { setCookie } from "../utils/auth";
import { API_URL } from "../utils/constants";

function SignUp() {
  const [userData, setUserData] = useState({ username: "", error: "" });
  async function handleSubmit(event) {
    event.preventDefault();
    setUserData(Object.assign({}, userData, { error: "" }));

    const username = userData.username;
    const password = userData.password;
    const url = `${API_URL}/signup/`;

    try {
      const response = await fetch(url, {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (200 <= response.status && response.status <= 299) {
        let token = await response.json();
        setCookie(token.access);
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    } catch (error) {
      const { response } = error;
      setUserData(
        Object.assign({}, userData, {
          error: response ? response.statusText : error.message,
        })
      );
    }
  }

  return (
    <React.Fragment>
      <div>
        <div className="columns is-centered m-lg font">
          <div className="column is-4 is-vcentered form">
            <div className="level-left field">
              <figure className="image is-64x64 level-item">
                <img src={"sabaiLogo.png"} />
              </figure>
              <h1
                className="level-item"
                style={{ fontSize: "2em", fontWeight: "bold" }}
              >
                Project Sa'bai
              </h1>
            </div>
            <div className="signup" style={{ fontWeight: "bold" }}>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="username" className="label">
                    Username
                  </label>

                  <input
                    type="text"
                    className="input"
                    id="username"
                    name="username"
                    value={userData.username}
                    onChange={(event) =>
                      setUserData(
                        Object.assign({}, userData, {
                          username: event.target.value,
                        })
                      )
                    }
                  />
                </div>

                <div className="field">
                  <label htmlFor="password" className="label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="input"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={(event) =>
                      setUserData(
                        Object.assign({}, userData, {
                          password: event.target.value,
                        })
                      )
                    }
                  />
                </div>

                <div className="field">
                  <button className="button buttonStyle" type="submit">
                    Sign Up
                  </button>
                </div>
                <div className="field">
                  Already have an account? <a href="/login">Login</a>
                </div>

                {userData.error && (
                  <p className="error">Error: {userData.error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
