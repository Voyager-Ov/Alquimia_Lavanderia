const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Cargar variables de entorno desde .env

const app = express();
const cors = require('cors');

// Middleware
app.use(cors()); // Habilitar solicitudes desde otros dominios
app.use(bodyParser.json()); // Parsear solicitudes JSON

// Ruta para manejar el envío de correos
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Validar los datos recibidos
    if (!name || !email || !message) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    // Configuración del transporte de correo
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Servicio de correo
        auth: {
            user: process.env.EMAIL_USER, // Correo del remitente desde .env
            pass: process.env.EMAIL_PASS, // Contraseña del remitente desde .env
        },
    });

    // Detalles del correo
    const mailOptions = {
        from: `"${name}" <${email}>`, // Mostrar el remitente como el usuario que llena el formulario
        to: process.env.EMAIL_USER, // Correo que recibirá el mensaje
        subject: `Nuevo mensaje de ${name}`, // Asunto del correo
        text: `Has recibido un nuevo mensaje:\n\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`, // Contenido del correo
    };

    // Intentar enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send('No se pudo enviar el correo. Inténtelo más tarde.');
        }
        console.log('Correo enviado:', info.response);
        res.status(200).send('Correo enviado correctamente.');
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
