import { Formik, Form } from "formik";
import { UserLogin } from "../../auth/AuthService";
import * as Yup from "yup";
import { TextInput } from "../TextInput";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../config/paths";
import "./styles.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { CharactersProps } from "../../shared/types";
import { apiGet } from "../../shared/apiService";
import { Endpoints } from "../../config/endpoints";
import { API_URL } from "../../config/general-config";
import { ListCharacters } from "../ListCharacters";

export const LoginComponent = () => {
  const [characters, setCharacters] = useState<CharactersProps[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGet({
          url: `${API_URL}/${Endpoints.CHARACTERS}`,
        });
        const reversed = response.reverse();
        const sliced = reversed.slice(0, 5);
        setCharacters(sliced);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto auto -9rem auto",
        }}
      >
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string().required("Por favor, ingrese un usuario."),
            password: Yup.string().required(
              "Por favor, ingrese una contraseña."
            ),
          })}
          onSubmit={async (values: any) => {
            try {
              const user = await toast.promise(UserLogin(values), {
                loading: "Ingresando...",
                success: <b>Usuario logueado correctamente!</b>,
                error: <b>Hubo un error. Verifique sus credenciales</b>,
              });

              localStorage.setItem("userID", user.userID);
              localStorage.setItem("username", user.username);

              setTimeout(() => {
                navigate(`${Paths.HOME}`);
              }, 2000);
            } catch (error: any) {
              console.log("Error: ", error);
            }
          }}
        >
          {({ handleBlur }) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "5rem",
                    marginBottom: "15rem",
                  }}
                >
                  <h1>Iniciar Sesión</h1>
                  <Form className="form-component">
                    <TextInput
                      label={"Usuario"}
                      name={"username"}
                      placeholder="Usuario"
                      type="text"
                      onBlur={handleBlur}
                    />
                    <TextInput
                      label={"Contraseña"}
                      name={"password"}
                      placeholder="Contraseña"
                      type="password"
                      onBlur={handleBlur}
                    />
                    <button type="submit">Ingresar</button>
                  </Form>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
      <ListCharacters
        characters={characters}
        title="Últimos personajes creados!"
      />
    </>
  );
};
