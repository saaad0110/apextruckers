const nodemailer = require("nodemailer");

const sendMail = (req ,res) => {
    const {name ,email , subject , message} = req.body;
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "jahanzaibasif969@gmail.com", 
            pass: "jghi tent lwnq jzmc"
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: "jahanzaibasif969@gmail.com", 
        subject: `Message from ${name}: ${subject}`, // Include the name and subject in the subject line
        text: `Message from: ${email}\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error:", error);
            res.status(500).json({ message: "Error sending email" });
        } else {
            console.log("Email sent:", info.response);
            res.json({ message: "Email sent successfully" });
        }
    });
    
}

module.exports = {
    sendMail
}