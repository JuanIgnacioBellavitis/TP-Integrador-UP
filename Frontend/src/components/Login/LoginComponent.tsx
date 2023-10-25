import { Formik, Form } from "formik";
import { UserLogin } from "../../auth/AuthService";
import * as Yup from 'yup';
import { TextInput } from "../TextInput";
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../config/paths';
import './styles.css';
import toast, { Toaster } from 'react-hot-toast';

export const LoginComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
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
              const user = await  toast.promise(UserLogin(values),    {
                loading: 'Ingresando...',
                success: <b>Usuario logueado correctamente!</b>,
                error: <b>Hubo un error. Verifique sus credenciales</b>,
              });
              
              localStorage.setItem('userID', user.userID);
              localStorage.setItem('username', user.username);

              setTimeout(() => {
                navigate(`${Paths.HOME}`);
              }, 2000);
            } catch (error: any) {
              console.log("Error: ", error)
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
                </>

              )
            }
          }
     </Formik>
      </div>
    </>
  )
}
