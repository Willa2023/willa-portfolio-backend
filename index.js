// import express, cors and @sendgrid/mail
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sendMail = require('@sendgrid/mail');

sendMail.setApiKey(process.env.SENDGRID_API_KEY);

// create a new express application
const app = express();
app.use(cors());
app.use(express.json());

// Route to test if the server is successfully deployed
app.get("/", (req, res) => {
    res.send("Hello, Willa!");
})

// Route to send emails
app.post('/contact', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const mail = {
        to: process.env.EMAIL_USER,
        from: process.env.EMAIL_USER,
        subject: `Message from ${firstName} ${lastName} - From Willa Portfolio Application`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        html: `<p>Name: ${firstName} ${lastName}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
    };

    sendMail.send(mail)
            .then(() => {
                res.status(200).json({status: 'Message Sent'});
            })
            .catch((error) => {
                console.error(error); 
                res.status(500).json({status:'ERROR'});
            })
});

// Start server
app.listen(process.env.PORT, () => console.log('Server Running on ' + process.env.PORT));


