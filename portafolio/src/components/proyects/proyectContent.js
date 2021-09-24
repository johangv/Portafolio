import React from "react";
import {AiOutlineGithub} from "react-icons/ai";
import {AiOutlineLink} from "react-icons/ai";
import "../../styles/proyectContent.css";

function ProyectContent({name, description, urlImage, code, codeLink, visit, visitLink}){
    return <div className = "row j-proyect-container">
            <div className = "col-12 col-lg-6 j-texts-container">
                <h4 className = "j-proyect-name mt-3 mt-lg-0">{name}</h4>
                <p className = "j-proyect-description">{description}</p>
                <div className = "j-buttons-container">
                    {visit && <a href = {visitLink} target = "_blank" className = "btn j-proyect-btn"><AiOutlineLink className = "j-proyect-icon"/> Ver proyecto</a>}
                    {code && <a href = {codeLink} target = "_blank" className = "btn j-proyect-btn"><AiOutlineGithub className = "j-proyect-icon"/> Ver código</a>}
                </div>
            </div>
            <div className = "col-12 col-lg-6 order-first order-lg-last">
                <img className = "j-proyect-image" src = {urlImage}></img>
            </div>
        </div>
}

export default ProyectContent;