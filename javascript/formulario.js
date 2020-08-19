function validar_form()
{
    var nombre = document.forms["formulario"]["nombre"].value;
    if (nombre == null || nombre == "")
    {
        alert("Introduce tu nombre.");
        return false;
    }

    var apellidos = document.forms["formulario"]["apellidos"].value;
    if (apellidos == null || apellidos == "")
    {
        alert("Introduce tus apellidos.");
        return false;
    }

    var contraseña = document.forms["formulario"]["contraseña"].value;
    if (contraseña == null || contraseña == "")
    {
        alert("Introduce la contraseña.");
        return false;
    }

    var contraseña2 = document.forms["formulario"]["contraseña2"].value;
    if (contraseña2 == null || contraseña2 == "")
    {
        alert("Repite la contraseña.");
        return false;
    }

    var edad = document.forms["formulario"]["edad"].value;
    if (edad == null || edad == "")
    {
        alert("Introduce tu edad.");
        return false;
    }

    var telefono = document.forms["formulario"]["telefono"].value;
    if (telefono == null || telofono == "" )
    {
        alert("Introduce tu teléfono.");
        return false;
    }

    var correo = document.forms["formulario"]["correo"].value;
    if (correo == null || correo == "")
    {
        alert("Introduce tu correo.");
        return false;
    }

    var fecha = document.forms["formulario"]["fecha"].value;
    if (fecha == null || fecha == "")
    {
        alert("Introduce tu fecha de nacimiento.");
        return false;
    }

    var bg = document.forms["formulario"]["bg"].value;
    var gg = document.forms["formulario"]["gg"].value;
    var solistas = document.forms["formulario"]["solistas"].value;
    if ((bg == null) && (gg == null) && (solistas == null))
    {
        alert("Especifica sobre qué quieres recibir noticias.");
        return false;
    }
}

function valid_contraseña()
{
    var contraseña = document.forms["formulario"]["contraseña"].value;
    if (contraseña == 0)
    {
        alert("Debes rellenar la contraseña.")
    }
}

function adv_contraseña()
{
    var contraseña = document.forms["formulario"]["contraseña"].value;
    var contraseña2 = document.forms["formulario"]["contraseña2"].value;
    if (contraseña != contraseña2) 
    {
        alert("Las contraseñas no coinciden");
        return false;
    }
}

function compr_tlf() 
{
    var num_tel = document.forms["formulario"]["telefono"].value;
    if (isNaN(num_tel))
    {
        alert("Solo números.");
        return false;
    }
    if (!(/^\d{9}$/.test(num_tel)))
    {
        alert("Debe tener 9 digitos. Compruebe el número introducido.");
        return false;
    }
}

function valid_correo() 
{
    var email = document.forms["formulario"]["correo"].value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))) 
    {
        alert("El correo solo puede contener los caracteres permitidos");
        return false;
    }
}    