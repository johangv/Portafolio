import React, { useState } from 'react';
import '../../styles/contactMe.css';
import emailjs from "emailjs-com";
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

function ContactMe(){

    const frmContact = {
        formName:"",
        formEmail:"",
        formMsg:"",
    };

    const [validated, setValidated] = useState(false);
    const [contact, setContact] = useState(frmContact);

    const handleChange = e => {
        const {name, value} = e.target;
        setContact({...contact, [name]:value});
    };

    const sendEmail = (e) => {
        
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }else{

            if(validated){
                Swal.fire({
                    title: "Operación exitosa",
                    text: "Mensaje enviado satisfactoriamente",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#000000",
                });
            }

            emailjs.sendForm('service_t8w19mi', 'template_92gwfes', e.target, 'user_tv5LAYncamIEARBHokBQi').
            then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
        setValidated(true);
    }

    return (<div id = "contact-me" className = "container-fluid j-contact-me-area">
        <div className = "container">
            <div className = "row j-contact-me-content">
                <div className = "col-12">
                    <h4 className = "j-contact-me-title">&#60; ¡Contáctame! &#47;&#62;</h4>
                </div>
                <div className = "col-12 col-lg-8">

                    <Form noValidate validated = {validated} onChange={handleChange} onSubmit = {sendEmail}>
                        <Form.Group controlId = "validationCustom01" className = "j-contact-input-name">
                            <Form.Label>Nombre*</Form.Label>
                            <Form.Control required type = "text" placeholder = "Ingrese su nombre" name = "name"/>
                            <Form.Control.Feedback type = "invalid"> Por favor ingrese su nombre </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId = "validationCustom02" className = "j-contact-input-email">
                            <Form.Label>Correo*</Form.Label>
                            <Form.Control required type = "email" placeholder = "Ingrese su correo" name = "email"/>
                            <Form.Control.Feedback type = "invalid"> Por favor ingrese un correo válido </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId = "validationCustom02" className = "j-contact-input-message">
                            <Form.Label>Mensaje*</Form.Label>
                            <Form.Control as = "textarea" rows = {5} required type = "text" placeholder = "Ingrese un mensaje" name = "message"/>
                            <Form.Control.Feedback type = "invalid"> Por favor ingrese un mensaje </Form.Control.Feedback>
                        </Form.Group>
                        <div className = "j-contact-btn-content">
                            <button type = "submit" className = "btn j-contact-btn">Enviar</button>
                        </div>
                    </Form>
                    
                </div>
            </div>

        </div>
    </div>
    );
}

export default ContactMe;