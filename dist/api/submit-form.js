const fs=require("fs"),path=require("path"),sgMail=require("@sendgrid/mail");sgMail.setApiKey(process.env.SENDGRID_API_KEY);const msg={to:"test@example.com",from:"test@example.com",subject:"Sending with SendGrid is Fun",text:"and easy to do anywhere, even with Node.js",html:"<strong>and easy to do anywhere, even with Node.js</strong>"};sgMail.send(msg).then((()=>{console.log("Email sent")})).catch((e=>{console.error(e)}));export default async(e,t)=>{if("POST"===e.method)try{path.join(__dirname,"..","templates","email.html");const s=async(e,t,s,o)=>{try{const o={to:e,from:t,subject:s,html:htmlContent};await sgMailMail.send(o),console.log("Email Sent")}catch(e){console.error("Error sending email:",e)}},{name:o,email:n,phone:a,collective_type:r,garment_type:l,color:i,quantity:c,vision:m}=e.body;console.log("Received data:",{name:o,email:n,phone:a,collective_type:r,garment_type:l,color:i,quantity:c,vision:m}),s("test@example.com","your-email@example.com","Sending with SendGrid is Fun","./path/to/your-file.html"),t.status(200).json({status:"success",message:"Data received and processed"})}catch(e){console.error("Error processing request:",e),t.status(500).json({status:"error",message:"Internal Server Error"})}else t.setHeader("Allow",["POST"]),t.status(405).end("Method Not Allowed")};