export default async(e,t)=>{if("POST"===e.method)try{const{name:s,email:o,phone:r,collective_type:a,garment_type:n,color:c,quantity:l,vision:i}=e.body;console.log("Received data:",{name:s,email:o,phone:r,collective_type:a,garment_type:n,color:c,quantity:l,vision:i}),t.status(200).json({status:"success",message:"Data received and processed"})}catch(e){console.error("Error processing request:",e),t.status(500).json({status:"error",message:"Internal Server Error"})}else t.setHeader("Allow",["POST"]),t.status(405).end("Method Not Allowed")};