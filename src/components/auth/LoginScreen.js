import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLogin, startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

import "./login.css";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputValues] = useForm({
    lEmail: "martin@gmail.com",
    lPassword: "123456",
  });

  const { lEmail, lPassword } = formLoginValues;

  const [formRegisterValues, handleRegisterInputValues] = useForm({
    rName: "Rene",
    rEmail: "Rene@gmail.com",
    rPassword1: "123456",
    rPassword2: "123456",
  });

  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(lEmail, lPassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (rPassword1 !== rPassword2) {
      return Swal.fire("Error", "Las contraseñas no coinciden", "error");
    }
    dispatch(startRegister(rName, rEmail, rPassword1));
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="lEmail"
                value={lEmail}
                onChange={handleLoginInputValues}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="lPassword"
                value={lPassword}
                onChange={handleLoginInputValues}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={rName}
                name="rName"
                onChange={handleRegisterInputValues}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                value={rEmail}
                name="rEmail"
                onChange={handleRegisterInputValues}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={rPassword1}
                name="rPassword1"
                onChange={handleRegisterInputValues}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                value={rPassword2}
                name="rPassword2"
                onChange={handleRegisterInputValues}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
