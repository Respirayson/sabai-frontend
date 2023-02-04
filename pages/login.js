import React, { useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import { login } from "../utils/auth";
import axios from "axios";
import { API_URL } from "../utils/constants";

function Login() {
  const [userData, setUserData] = useState({ username: "", error: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setUserData(Object.assign({}, userData, { error: "" }));

    const username = userData.username;
    const password = userData.password;
    const url = `${API_URL}/api/token/`;
    const userInfoUrl = `${API_URL}/user/get?username=${username}`;

    try {
      console.log("fetching data");
      const response = await fetch(url, {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const { data: userInfo } = await axios.get(userInfoUrl);
      console.log("url check ", userInfoUrl);

      console.log("this is the response ", response);

      if (response.status === 200) {
        console.log("Login successful");
        let token = await response.json();
        let fullUserName = `${userInfo[0].fields.first_name} ${userInfo[0].fields.last_name}`;

        console.log("and your name is ", fullUserName);

        await login({ token: token.access, name: fullUserName });
      } else {
        console.log("Login failed.");
        // https://github.com/developit/unfetch#caveats
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    } catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );

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
      <Head>
        <title>Project Sa'bai</title>
        <link
          rel="stylesheet"
          href="https://combinatronics.com/kiwicopple/quick-font/master/css/circular.css"
        />
      </Head>

      <main>
        <div className="columns is-centered m-lg font">
          <div className="column is-4 is-vcentered form">
            <div className="level-left field">
              <figure className="image is-64x64 level-item">
                <img src={"../static/sabaiLogo.png"} />
              </figure>
              <h1 className="level-item" style={{ fontSize: "2em" }}>
                Project Sa'bai
              </h1>
            </div>
            <div className="login">
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
                    Login
                  </button>
                </div>

                {userData.error && (
                  <p classNameName="error">Error: {userData.error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Login;
