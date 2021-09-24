import React from 'react';
import '../../styles/resume.css';

//Icons
import {ImHtmlFive} from "react-icons/im";
import {SiCss3} from "react-icons/si";
import {SiJavascript} from "react-icons/si";
import {SiJava} from "react-icons/si";
import {GrReactjs} from "react-icons/gr";
import {BsFillBootstrapFill} from "react-icons/bs";
import {SiFlutter} from "react-icons/si";
import {SiLaravel} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {SiFirebase} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";

//sub components
import Date from "./date";
import Tecnology from './tecnology';

function Resume(){
    return <div id = "resume" className = "container-fluid j-resume-area">
        <div className = "container">
            <div className = "row j-resume-content">
                <div className = "col-12 j-resume-title-content">
                    <h4 className = "j-resume-title">&#60; Resumen &#47;&#62;</h4>
                </div>
                <div className = "col-12 col-lg-6">
                    <h3 className = "j-resume-subtitle">Educación</h3>
                    <Date name="Colegio Comfandi Miraflores" range="2010 - 2016" title="Bachiller Académico"/>
                    <Date name="Universidad Autónoma de Occidente" range="2016 - 2021" title="Pregrado en ingeniería multimedia"/>
                </div>
                <div className = "col-12 col-lg-6 j-tecnologies-area">
                    <h3 className = "j-resume-subtitle">Habilidades</h3>
                    <div className = "j-tecnologies-container">
                        <Tecnology icon = {<ImHtmlFive className = "j-tecnology-icon"/>} name = "Html"/>
                        <Tecnology icon = {<SiCss3 className = "j-tecnology-icon"/>} name = "Css"/>
                        <Tecnology icon = {<SiJavascript className = "j-tecnology-icon"/>} name = "JavaScript"/>
                        <Tecnology icon = {<SiJava className = "j-tecnology-icon"/>} name = "Java"/>
                        <Tecnology icon = {<GrReactjs className = "j-tecnology-icon"/>} name = "React.js"/>
                        <Tecnology icon = {<BsFillBootstrapFill className = "j-tecnology-icon"/>} name = "Bootstrap"/>
                        <Tecnology icon = {<SiJava className = "j-tecnology-icon"/>} name = "Java for Android"/>
                        <Tecnology icon = {<SiFlutter className = "j-tecnology-icon"/>} name = "Flutter"/>
                        <Tecnology icon = {<SiLaravel className = "j-tecnology-icon"/>} name = "Laravel"/>
                        <Tecnology icon = {<GrMysql className = "j-tecnology-icon"/>} name = "MySql"/>
                        <Tecnology icon = {<SiFirebase className = "j-tecnology-icon"/>} name = "Firebase"/>
                        <Tecnology icon = {<FaGitAlt className = "j-tecnology-icon"/>} name = "Git"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Resume;