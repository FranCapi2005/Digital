
let profile = 'guest';

if (profile == 'guest'|| profile == 'GUEST' || profile == 'Guest') {
    console.log("Usted sólo tiene permisos de consultar datos")    
} else if (profile == 'assistant' || profile == 'ASSISTANT' || profile == 'Assistant') {
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos")
} else if (profile == 'admin' || profile == 'ADMIN' || profile == 'Admin') {
    console.log('Usted tiene todos los privilegios de uso del sistema'); 
} else {
    console.log('Tiene que especificar una credencial para acceder')
}


switch (profile) {
    case (profile == "guest" || profile == "GUEST" || profile == "Guest"):
        console.log("Usted sólo tiene permisos de consultar datos");
        break;
    case (profile == "assistant" || profile == "ASSISTANT" || profile == "Assistant"):
        console.log("Usted solo tiene permisos para regustrat, modificar y consultar datos");
        break;
    case (profile = "admin" || profile == "ADMIN" || profile == "Admin"):
        console.log("Usted tiene todos los privilegios de uso en el sistema")
        break;        
    default: " ";
        console.log("Tiene que especificar una credencial para acceder")
        break;
}