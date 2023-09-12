//importamos de react el useState 
import React, {useState} from "react"
import validate from "../../validation.jsx"

export default function Form(props) {

//Crea un estado local llamado userData. Este debe inicializarse como un objeto con 
//las propiedades email y password iguales a un string vacío.
    const [userData, setuserData] = useState({
        email:'',
        password :'',
        })

// Conecta tu estado local con los inputs correspondientes utilizando la propiedad value. ver valores value en los imputs del form 

// En tu componente Form crea un nuevo estado local llamado "errors" que se inicialice como un objeto vacío. Este es el estado que utilizarás para encontrar errores en el formulario.

const [errors, seterrors] = useState({
    email:'',
    password :'',
})

// //Crea una función llamada handleChange que nos permita reflejar el texto ingresado 
// //de los inputs en nuestro estado local.
    const handleChange=(e)=>{
        const {name, value}= e.target
            setuserData({
             ...userData,
                [name]: value
         })
         seterrors(
            validate({
                ...userData,
                [name]: value
            })
         )
    }

    //En el componente Form crea una función "handleSubmit". Esta función recibe un evento por parámetro. Deberás ejecutas la función e.preventDefault(). Luego ejecuta la función "login" recibida por props. ¡No te olvides de pasarle por parámetro tu estado local userData!

    const handleSubmit = (event) => {
      event.preventDefault();
            props.login(userData)
    };

    return (
        <form onSubmit={handleSubmit}> 
        <h2>Ready to Access Cards...</h2>
                <label for="email">UserName: </label>
                    <input
                        value={userData.email}
                        name="email"
                        type='email' 
                        id="email"
                        placeholder="Example: abcdef@yahoo.es"
                        onChange={handleChange}
                /> 
                <p>{errors.email && errors.email}</p>
                {/* Aquí vemos cómo podemos mostrar mensajes de error */}

                <hr />
                <br />
                <label>Password: </label>
                    <input
                        value={userData.password}
                        name="password"
                        type='password' 
                        id="password"
                        placeholder="Debe contener 6 characters"
                        onChange={handleChange}
    
                    /> 
                <p>{errors.password && errors.password}</p>
                <hr />
                <br />

            <button>Submit</button>
        </form>
    )
}





