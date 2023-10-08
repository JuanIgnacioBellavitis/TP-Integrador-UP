import { ErrorMessage, useField } from "formik";

interface TextInputPorps {
    label: string,
    name: string,
    type?: 'text' | 'email' | 'password' | 'select',
    placeholder?: string,
    [x: string]: any,
}

export const TextInput = ({label, ...props}: TextInputPorps) => {
    
    const [field] = useField(props);

    return (
        <>            
            <input {...field} {...props} />
            <ErrorMessage className="error-message" name={props.name} component="span"/>
        </>
    )
}
