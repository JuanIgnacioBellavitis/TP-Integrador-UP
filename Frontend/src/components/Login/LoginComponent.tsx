import { useState } from 'react';
import { Formik, Form } from "formik";
import { UserLogin } from "../../auth/AuthService";
import * as Yup from 'yup';
import { TextInput } from "../TextInput";
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../config/paths';
import './styles.css';

export const LoginComponent = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={
            Yup.object({
              username: Yup.string()
                .required('Por favor, ingrese un usuario.'),
              password: Yup.string()
                .required('Por favor, ingrese una contraseña.')
            })
          }
          onSubmit={async (values: any) => {
            try {
              const user = await UserLogin(values);
              console.log(user)
              localStorage.setItem('userID', user.userID);
              localStorage.setItem('username', user.username);
              

              navigate(`${Paths.HOME}`);
            } catch (error: any) {
              setError('Acceso no autorizado. Por favor, verifique sus credenciales.')
            }
          }}
     >
          {
            ({ handleBlur }) => {
              return (
                <>
                <h1>Iniciar Sesión</h1>
                <Form className="form-component">
                  <TextInput label={"Usuario"} name={"username"} placeholder="Usuario" type="text" onBlur={handleBlur} />
                  <TextInput label={"Contraseña"} name={"password"} placeholder="Contraseña" type="password" onBlur={handleBlur} />

                  <button type="submit">Ingresar</button>
                </Form>
                {error && <span>{error}</span>}
                </>

              )
            }
          }
     </Formik>
      </div>
    </>
  )
}
