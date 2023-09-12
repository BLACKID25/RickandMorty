

export default function validate(e){

    const regeEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const regePass = new RegExp("[0-9]")
    const errors = {}
  
    if (!regeEmail.test(e.email)) {errors.email = "Nombre debe ser un emal válido";}
    if (!e.email) errors.email = "Campo Obligatorio";
    if (e.email.length>35) errors.email = "Excede de Caracteres Máximo 35 caracteres"
  
    if (!regePass.test(e.password)) errors.password = "Debe contener al menos un números"
    if (e.password.length <6 || e.password.length>10) errors.password = "Debe contener entre 6 y 10 caracteres"
  
  return errors;
  }


    // const regeEmail = /\S+@\S+\.\S+/