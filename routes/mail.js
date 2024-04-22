const express = require('express')
const router = express.Router()
const nodemailer = require("nodemailer");
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.USER_ID,
        pass: process.env.USER_PASSWORD,
    },
});

const html = 





// {
//     "from": "\"Maddison Foo Koch\" <maddison53@ethereal.email>", // nedd name and email
//     "to": "bar@example.com, baz@example.com",  // nedd name and email
//     "subject": "from subject",  // nedd text
//     "text": "Hello world? sarva",  // nedd text
//     "html": "<b>Hello world?</b>", // nedd text optiopnal
// }




router.post('/', async (req, res) => {
    console.log(process.env.USER_ID);
    console.log(process.env.USER_PASSWORD);

    const data = req.body
    console.log(req.body);
    try {
        const info = await transporter.sendMail({
            from: process.env.USER_ID, // sender address
            to: data.to, // list of receivers
            subject: data.subject, // Subject line
            text: data.text, // plain text body
            html: data.html, // html body
        });
        res.status(200).send(info);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }

    // res.send("<h2> hello ther this is mail</h2>");
})

module.exports = router;
