import mjml2html from 'mjml';

// 💭 --------------------------------------------------------------

export function createEmailMarkup(data) {
  const { name, email, phone, collective_type, garment_type, color, quantity, vision } = data;

  const mjmlString = `
    <mjml>
      <mj-head>
        <mj-title>Collective Cloth: New Request Recieved</mj-title>
        <!-- ? primary font as name attr -->
        <mj-font
          name="Major Mono Display"
          href="https://fonts.googleapis.com/css2?family=Gasoek+One&family=Major+Mono+Display&family=Pixelify+Sans:wght@400..700&display=swap"
        />
    
        <mj-attributes>
          <mj-all
            font-size="12px"
            font-family="'Major Mono Display', monospace"
            color="whitesmoke"
          />
    
        </mj-attributes>
    
        <mj-style>
          body {
            font-optical-sizing: auto;
            font-size: 12px;
            background: #212121;
            color: #f5f5f5;
          }
        
          .content-style {
            height: 100%;
            width: 100%;
          }
        
          .header-style {
            display: grid;
            padding-top: 1rem;
            place-items: center;
            padding-bottom: 1rem;
          }
          .header-style .cyclone-c-image {
            -webkit-filter: drop-shadow(0 0 9px #25f8e7);
            filter: drop-shadow(0 0 9px #25f8e7);
            width: 55vw;
          }
        
          .main-style {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-inline: 1rem;
          }
          .main-style .main-heading {
            color: #000;
            font-family: 'Gasoek One', monospace;
            text-transform: uppercase;
            padding-bottom: 1rem;
            padding-inline: 1.5rem;
            text-shadow: 0 0 9px #25f8e7;
          }
          .main-style .form-data-ul {
            border-radius: 40px;
            background: #212121;
            box-shadow: inset 10px 10px 20px #181818, inset -10px -10px 20px #2a2a2a;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            padding-bottom: 3rem;
            padding: 1.5rem;
            row-gap: 1rem;
          }
          .main-style .form-data-ul .non-final-li {
            border-bottom: 1px dotted silver;
            border-color: #25f8e7;
            gap: 1rem;
            padding-bottom: 0.5rem;
          }
          .main-style .field-name {
            font-family: 'Pixelify Sans', monospace;
            padding-bottom: 0.5rem;
          }
          .main-style .field-value {
            vertical-align: 6px;
          }
        
          .footer-style {
            align-items: center;
            display: flex;
            flex-direction: column;
            padding-bottom: 1rem;
            row-gap: 0.5rem;
          }
          .footer-style .footer-text {
            text-align: center;
          }
          .footer-style .non-final-footer-text {
            padding-bottom: 0.5rem;
          }
          .footer-style .cyclone-studios-image {
            -webkit-filter: drop-shadow(0 0 3px whitesmoke);
            filter: drop-shadow(0 0 3px whitesmoke);
            height: auto;
            width: 66px;
          }
        </mj-style>
      </mj-head>
        
      <mj-body css-class="content">
        <mj-section css-class="header-style">
          <mj-column>
            <mj-image src="https://cyclone-studios.s3.us-east-2.amazonaws.com/s3_cyclone-studios/alphaLogos/cycloneC/animated/gif+files/realistic-black-outline.gif" alt="Cyclone Studios Logo"/>
          </mj-column>
        </mj-section>
        
        <mj-section css-class="main-style">
          <mj-column>
            <!-- * main heading  -->
            <mj-text
              color="black"
              css-class="main-heading"
              font-size="36px"
              font-family="'Gasoek One', monospace"
            >
              New Order Request Zaddy:
            </mj-text>
        
            <!-- * name -->
            <mj-text
              css-class="field-name"
              font-family="'Pixelify Sans', monospace"
              font-size="16px"
            >
              ⦖ client_name:
            </mj-text>
            <mj-text css-class="field-value">
              ${name}
            </mj-text>
            <mj-divider border-width="1px" border-style="ridge" border-color="#CCCCCC" />
        
            <!-- * email -->
            <mj-text
              css-class="field-name"
              font-family="'Pixelify Sans', monospace"
              font-size="16px"
            >
              ⦖ email_address:
            </mj-text>
            <mj-text css-class="field-value">
              ${email}
            </mj-text>
            <mj-divider border-width="1px" border-style="ridge" border-color="#CCCCCC" />
        
            <!-- * phone number  -->
            <mj-text 
              css-class="field-name"
              font-family="'Pixelify Sans', monospace"
              font-size="16px"
            >
              ⦖ phone_number:
            </mj-text>
            <mj-text css-class="field-value">
              ${phone}
            </mj-text>
            <mj-divider border-width="1px" border-style="ridge" border-color="#CCCCCC" />
        
            <!-- * collective type  -->
            <mj-text
              css-class="field-name"
              font-family="'Pixelify Sans', monospace"
              font-size="16px"
            >
              ⦖ collective_type:
            </mj-text>
            <mj-text css-class="field-value">
              ${collective_type}
            </mj-text>
            <mj-divider border-width="1px" border-style="ridge" border-color="#CCCCCC" />
        
            <!-- * garment type  -->
            <mj-text
              css-class="field-name"
              font-size="16px"
              font-family="'Pixelify Sans', monospace"
            >
              ⦖ garment_type:
            </mj-text>
            <mj-text css-class="field-value">
              ${garment_type}
            </mj-text>
            <mj-divider border-width="1px" border-style="ridge" border-color="#CCCCCC" />
        
            <!-- * garment color  -->
            <mj-text
              css-class="field-name"
              font-size="16px"
              font-family="'Pixelify Sans', monospace"
            >
              ⦖ garment_color:
            </mj-text>
            <mj-text css-class="field-value">
              ${color}
            </mj-text>
            <mj-divider border-width="1px" border-style="ridge" border-color="#CCCCCC" />
        
            <!-- * quantity  -->
            <mj-text
              css-class="field-name"
              font-size="16px"
              font-family="'Pixelify Sans', monospace"
            >
              ⦖ quantity:
            </mj-text>
            <mj-text css-class="field-value">
              ${quantity}
            </mj-text>
            <mj-divider border-width="1px" border-style="ridge" border-color="#CCCCCC" />
        
            <!-- * vision  -->
            <mj-text
              css-class="field-name"
              font-size="16px"
              font-family="'Pixelify Sans', monospace"
            >
              ⦖ vision:
            </mj-text>
            <mj-text css-class="field-value">
              ${vision}
            </mj-text>
          </mj-column>
        </mj-section>
        
        <mj-section css-class="footer-style">
          <mj-column>
            <mj-text align="center" css-class="footer-text non-final-footer-text" font-size="10px">
              © 2024 Collective Cloth. 
            </mj-text>
        
            <mj-text align="center" css-class="footer-text" font-size="10px">
              All rights reserved.
            </mj-text>
        
            <mj-image 
              alt="Cyclone Studios Logo" 
              css-class="cyclone-studios-image"
              src="https://cyclone-studios.s3.us-east-2.amazonaws.com/s3_cyclone-studios/alphaLogos/cycloneStudios/cycloneStudios.svg" 
            />    
        </mj-column>     
        </mj-section>
      </mj-body>
    </mjml>
  `;

  const htmlOutput = mjml2html(mjmlString).html;

  return htmlOutput;
}
