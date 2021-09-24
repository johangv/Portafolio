import React from "react";
import ProyectContent from "./proyectContent";
import "../../styles/proyects.css";

function Proyects(){
    return <div id = "proyects" className = "container-fluid j-proyects-area">
        <div className = "container">
            <div className = "row">
                <div className = "col-12 j-proyect-area">
                    <h4 className = "j-proyect-title">&#60; Proyectos &#47;&#62;</h4>
                    <ProyectContent name = "Rescate del queso" 
                    description = 'Se trata de un video interactivo web, que tiene el objetivo de enseñar a los niños de grado tercero de primaria, la comprensión de las relaciones entre los valores del área y el perímetro de las figuras planas, contribuyendo al cumplimiento del ODS 4 "Educación de calidad".'
                    urlImage = "../assets/Images/CheeseRescue.JPG"
                    code 
                    codeLink = "https://github.com/Arangojd26/Cheese-Rescue"
                    visit
                    visitLink = "https://cheese-rescue.netlify.app"/>
                    <ProyectContent name = "LAC Inmobiliaria web"
                    description = 'Es una página web que se encuentra aún en desarrollo con React js y Laravel. Tiene como objetivo principal de ser un medio por el que los clientes de la inmobiliaria LAC puedan ver las porpiedades disponibles, aplicar a ellas o solicitar algún tipo de servicio con la empresa. Por otro lado, los empleados de la inmobiliaria también pueden iniciar sesión en la página usando un enlace especial, esto con el objetivo de acceder a los documentos enviados por los clientes para aplicar a una propiedad o creados por otros empleados'
                    urlImage = "../assets/Images/Lac inmobiliaria.JPG"
                    visit
                    visitLink = "https://www.youtube.com/watch?v=QUtS-o4Kyec"
                    />
                    <ProyectContent name = "Clon de WhatsApp"
                    description = 'Se trata de una réplica de las vistas principales de la aplicación de WhatsApp.'
                    urlImage = "../assets/Images/Wpp_clone3.png"
                    code
                    codeLink = "https://github.com/johangv/Wpp_Clone"
                    visit
                    visitLink = "https://youtu.be/fmpPnwXinhE"
                    />
                </div>
            </div>
        </div>

    </div>
}

export default Proyects;