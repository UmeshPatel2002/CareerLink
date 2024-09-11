import nodemailer from 'nodemailer';


// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',  // You can use other services like 'Yahoo', 'Outlook', or custom SMTP
    auth: {
        user: 'careerlink000@gmail.com', // Your email
        pass: 'ppjudkuwhwbybpsx'   // Your email password or app-specific password
    }
});


// Test the connection
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to send emails');
    }
});





export const sendApplicationEmail = async (userEmail, jobTitle) => {
    const mailOptions = {
        from: 'careerlink000@gmail.com', // Sender address
        to: userEmail,                // Recipient (applicant)
        subject: `Job Application: ${jobTitle}`,  // Subject line
        text: `Thank you for applying for the ${jobTitle} role. We have received your application.`, // Plain text body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Application email sent: ' + info.response);
    } catch (error) {
        console.log('Error sending email: ' + error.message);
    }
};



export const sendAcceptanceEmail = async (userEmail, jobTitle, status,company) => {
    const mailOptions = {
        from: 'careerlink000@gmail.com',
        to: userEmail,
        subject: `Job Application ${status.charAt(0).toUpperCase() + status.slice(1)}: ${jobTitle}`,
        text: status === 'Accepted' 
            ? `Congratulations! Your application for the ${jobTitle} role has been accepted. We are excited to have you onboard and will contact you soon with further details.


            
Best regards,
${company} 
 HR Team` 
            : `Dear Applicant,

Thank you for your interest in the ${jobTitle} role ${company}.

After careful consideration and review of all applicants, we regret to inform you that we have chosen not to move forward with your application at this time. This decision was not easy, as we received many qualified applications.

We encourage you to apply for future opportunities with us.

Best regards,
${company} 
 HR Team`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Acceptance email sent: ' + info.response);
    } catch (error) {
        console.log('Error sending email: ' + error.message);
    }
};