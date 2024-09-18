import nodemailer from 'nodemailer';


//Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',  // You can use other services like 'Yahoo', 'Outlook', or custom SMTP
    auth: {
        user: 'careerlink000@gmail.com', // Your email
        pass: 'ppjudkuwhwbybpsx'   // Your email password or app-specific password
    }
});
// Create a transporter object
// const transporter = nodemailer.createTransport({
//     service: 'gmail',  // You can use other services like 'Yahoo', 'Outlook', or custom SMTP
//     auth: {
//         user: 'careers.recruitcrm@gmail.com', // Your email
//         pass: 'fzcefyatxzqgnvuq'   // Your email password or app-specific password
//     }
// });



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

export const senMail=async (req,res)=>{
   
    const id=Math.floor(Math.random()*1000000);
    const mailOptions = {
        from: 'careers.recruitcrm@gmail.com', // Sender address
        to: 'dhruvagrawal2204@gmail.com',                // Recipient (applicant)
        subject: `Coding Roung Registration`,  // Subject line
        html: `<img src="https://res.cloudinary.com/dnmdmczfw/image/upload/f_auto,q_auto/ltoup6ix9s1oi3zfalah" alt="logo"/>
        <div style="background-color:#fff8c9; white-space: pre-line;font-size:15px;padding:0 10px">
            Dear Student,<br>
            <h1> MADAR CHOD, BSDK</h1>
            <p style="font-size:18px"><strong>Congratulations!</strong></p><br> After successfully clearing the MCQ round,we are pleased to inform you that you have been selected to move forward to the coding round of the recruitment process.<br>
            This next phase will test your problem-solving skills and proficiency in programming.<br>
            Please prepare yourself by reviewing relevant algorithms and data structures, as these will be essential for success.<br>
            
            We look forward to seeing your technical abilities in action and wish you the best of luck!<br><br>
            <a style="text-decoration:none" href="https://res.cloudinary.com/dnmdmczfw/image/upload/f_auto,q_auto/upvka7uw5mslzdmq8b0g"><button style="height:50px;padding:4px 10px;font-size:20px;background-color:#fc5203; color:white;border-radius:10px;outline:none;border:none">Register Here!</button></a><br>
            Best regards,
            Team Recruit CRM
            <br>
           </div>`,
        // attachments:[{filename:'Coding Round Letter.pdf',''}]
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Application email sent: ' + info.response);
        return res.end();
    } catch (error) {
        console.log('Error sending email: ' + error.message);
    }
}



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