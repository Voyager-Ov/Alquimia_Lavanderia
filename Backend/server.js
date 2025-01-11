const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para manejar el envío de correos
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configuración del transporte de correo
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Reemplaza con tu correo
            pass: 'your-email-password', // Reemplaza con tu contraseña
        },
    });

    // Detalles del correo
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // El correo que recibirá el mensaje
        subject: `Nuevo mensaje de ${name}`,
        text: message,
    };

    // Envío del correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error al enviar el correo.');
        }
        res.status(200).send('Correo enviado correctamente.');
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
