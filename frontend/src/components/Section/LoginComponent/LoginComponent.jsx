import "./LoginComponent.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../api/ApiAuth";
import pokemons from "../../api/ApiPokemones";
import { useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const setJwt = async () => {
    try {
      const usuario = {
        username: username,
        password: password,
      };
      setLoading(true);
      await auth.login(usuario).then((res) => {
        if (res.data.success) {
          localStorage.removeItem("token");
          localStorage.setItem("token", res.data.token);

          navigate("/pokedex");
          alert(res.data.message);
          setLoading(false);
        }
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJwt();
  };

  return (
    <body id="login">
      <div className="bodylogin">
        <div>
          <img
            src="./img/Pokeball.png"
            alt="pokeball"
            className="pokeball-login"
          />
          <h1 className="tituloLogin">Pokedex</h1>
        </div>
        <h3>Login</h3>

        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="input1"
            type="text"
            required
          />

          <p>Password</p>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input2"
            type="password"
            name=""
            id=""
            required
          />
        </form>

        <div className="div-ingresar">
          <button onClick={handleSubmit} className="ingresar">
            Ingresar
          </button>
          
        </div>
        <div>
        {loading && (
            <>
              {" "}
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </>
          )}
        </div>
        <div className="signup">
        <a className="linkregister" href="/register">
          Sign up
        </a>
        </div>
      </div>
    </body>
  );
}

export default Login;
