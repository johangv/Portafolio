import React from 'react';
import '../../styles/aboutMe.css';
import {AiOutlineMail} from 'react-icons/ai';

function AboutMe(){
    return <div id = "about-me" className = "container-fluid j-about-me-content">
        <div className = "container">
            <div className = "row">
                <div className = "col-md-12">
                    <h4 className = "j-about-title j-about-title-center">&#60; Sobre mí &#47;&#62;</h4>
                </div>
            </div>
            <div className = "row j-content d-flex">
                <div className = "col-8 col-md-5 col-lg-3 justify-self-center mx-auto">
                    <img className = "img-fluid j-about-photo" src = "../assets/Images/Foto.jpg"></img>
                </div>
                <div className = "col-11 col-md-6 col-lg-8">
                    <h2 className = "j-about-subtitle-text">¡Hola!, yo soy</h2>
                    <h4 className = "j-about-title">Johan Alberto Gil Valderrama</h4>
                    <div className = "j-about-email">
                        <AiOutlineMail className = "j-mail-icon"/>
                        <h2 className = "j-about-subtitle-text">Johan.gil@uao.edu.co</h2>
                    </div>
                    <p className = "j-about-text"> Me encuentro finalizando una carrera en ingeniería multimedia, en la cual
                            he tenido la oportunidad de aprender a usar diversas metodologías y
                            tecnologías para implementarlas en el desarrollo de proyectos basados en
                            aplicaciones web, móviles y sistemas multimedia.
                    </p>
                    <p className = "j-about-text"> Tengo las aptitudes necesarias para cumplir con mi trabajo haciendo uso
                            de buenas prácticas, comunicación y trabajo en equipo.
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default AboutMe;