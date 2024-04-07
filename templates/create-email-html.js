

export function createEmailMarkup(data) {
  const { name, email, phone, collective_type, garment_type, color, quantity, vision } = data;

  const htmlContent =
    `<!DOCTYPE html>\n` +
    `<html>\n` +
    `  <head>\n` +
    `    <meta charset="UTF-8" />\n` +
    `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n` +
    `    <title>Collective Cloth: New Request Recieved</title>\n` +
    `    <!-- googleFonts -->\n` +
    `    <link rel="preconnect" href="https://fonts.googleapis.com" />\n` +
    `    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n` +
    `    <link\n` +
    `      href="https://fonts.googleapis.com/css2?family=Gasoek+One&family=Major+Mono+Display&family=Pixelify+Sans:wght@400..700&display=swap"\n` +
    `      rel="stylesheet"\n` +
    `    />\n` +
    `    <!-- cycloneReset -->\n` +
    `    <style>\n` +
    `      *,\n` +
    `      *::before,\n` +
    `      *::after {\n` +
    `        box-sizing: border-box;\n` +
    `      }\n` +
    `\n` +
    `      * {\n` +
    `        font: inherit;\n` +
    `      }\n` +
    `\n` +
    `      html {\n` +
    `        box-sizing: inherit;\n` +
    `      }\n` +
    `\n` +
    `      html:focus-within {\n` +
    `        scroll-behavior: smooth;\n` +
    `      }\n` +
    `\n` +
    `      body {\n` +
    `        line-height: 1.5;\n` +
    `        min-height: 100vh;\n` +
    `        position: relative;\n` +
    `        text-rendering: optimizeSpeed;\n` +
    `      }\n` +
    `\n` +
    `      html,\n` +
    `      body,\n` +
    `      div,\n` +
    `      span,\n` +
    `      object,\n` +
    `      iframe,\n` +
    `      h1,\n` +
    `      h2,\n` +
    `      h3,\n` +
    `      h4,\n` +
    `      h5,\n` +
    `      h6,\n` +
    `      p,\n` +
    `      blockquote,\n` +
    `      pre,\n` +
    `      abbr,\n` +
    `      address,\n` +
    `      cite,\n` +
    `      code,\n` +
    `      del,\n` +
    `      dfn,\n` +
    `      em,\n` +
    `      img,\n` +
    `      ins,\n` +
    `      kbd,\n` +
    `      q,\n` +
    `      samp,\n` +
    `      small,\n` +
    `      strong,\n` +
    `      sub,\n` +
    `      sup,\n` +
    `      var,\n` +
    `      b,\n` +
    `      i,\n` +
    `      dl,\n` +
    `      dt,\n` +
    `      dd,\n` +
    `      ol,\n` +
    `      ul,\n` +
    `      li,\n` +
    `      fieldset,\n` +
    `      form,\n` +
    `      label,\n` +
    `      legend,\n` +
    `      table,\n` +
    `      caption,\n` +
    `      tbody,\n` +
    `      tfoot,\n` +
    `      thead,\n` +
    `      tr,\n` +
    `      th,\n` +
    `      td,\n` +
    `      article,\n` +
    `      aside,\n` +
    `      canvas,\n` +
    `      details,\n` +
    `      figcaption,\n` +
    `      figure,\n` +
    `      footer,\n` +
    `      header,\n` +
    `      hgroup,\n` +
    `      menu,\n` +
    `      nav,\n` +
    `      section,\n` +
    `      summary,\n` +
    `      time,\n` +
    `      mark,\n` +
    `      audio,\n` +
    `      video {\n` +
    `        background: transparent;\n` +
    `        border: 0;\n` +
    `        font-size: 100%;\n` +
    `        margin: 0;\n` +
    `        outline: 0;\n` +
    `        padding: 0;\n` +
    `        vertical-align: baseline;\n` +
    `      }\n` +
    `\n` +
    `      article,\n` +
    `      aside,\n` +
    `      details,\n` +
    `      figcaption,\n` +
    `      figure,\n` +
    `      footer,\n` +
    `      header,\n` +
    `      hgroup,\n` +
    `      menu,\n` +
    `      nav,\n` +
    `      section {\n` +
    `        display: block;\n` +
    `      }\n` +
    `\n` +
    `      h1,\n` +
    `      h2,\n` +
    `      h3,\n` +
    `      h3,\n` +
    `      h5,\n` +
    `      h6 {\n` +
    `        font-weight: normal;\n` +
    `      }\n` +
    `\n` +
    `      img,\n` +
    `      picture,\n` +
    `      svg {\n` +
    `        display: block;\n` +
    `        max-width: 100%;\n` +
    `      }\n` +
    `\n` +
    `      img {\n` +
    `        image-rendering: crisp-edges;\n` +
    `      }\n` +
    `\n` +
    `      button {\n` +
    `        background-color: transparent;\n` +
    `        border: none;\n` +
    `        font-family: inherit;\n` +
    `        padding: 0;\n` +
    `      }\n` +
    `\n` +
    `      picture img {\n` +
    `        object-fit: contain;\n` +
    `      }\n` +
    `\n` +
    `      /* change colours to suit your needs */\n` +
    `      ins {\n` +
    `        background-color: #ff9;\n` +
    `        color: #000;\n` +
    `        text-decoration: none;\n` +
    `      }\n` +
    `\n` +
    `      /* change colours to suit your needs */\n` +
    `      mark {\n` +
    `        background-color: #ff9;\n` +
    `        color: #000;\n` +
    `        font-style: italic;\n` +
    `        font-weight: bold;\n` +
    `      }\n` +
    `\n` +
    `      del {\n` +
    `        text-decoration: line-through;\n` +
    `      }\n` +
    `\n` +
    `      dfn {\n` +
    `        font-style: italic;\n` +
    `        margin-right: 3px;\n` +
    `      }\n` +
    `\n` +
    `      abbr[title],\n` +
    `      dfn[title] {\n` +
    `        cursor: help;\n` +
    `      }\n` +
    `\n` +
    `      table {\n` +
    `        border-collapse: collapse;\n` +
    `        border-spacing: 0;\n` +
    `      }\n` +
    `\n` +
    `      /* change border colour to suit your needs */\n` +
    `      hr {\n` +
    `        display: block;\n` +
    `        height: 1px;\n` +
    `        border: 0;\n` +
    `        border-top: 1px solid #cccccc;\n` +
    `        margin: 1em 0;\n` +
    `        padding: 0;\n` +
    `      }\n` +
    `\n` +
    `      input,\n` +
    `      select {\n` +
    `        vertical-align: middle;\n` +
    `      }\n` +
    `\n` +
    `      em {\n` +
    `        font-style: italic;\n` +
    `      }\n` +
    `\n` +
    `      .accessibility {\n` +
    `        height: 1px;\n` +
    `        left: -9999px;\n` +
    `        overflow: hidden;\n` +
    `        position: absolute;\n` +
    `        top: auto;\n` +
    `        width: 1px;\n` +
    `      }\n` +
    `\n` +
    `      input:-webkit-autofill,\n` +
    `      input:-webkit-autofill:hover,\n` +
    `      input:-webkit-autofill:focus,\n` +
    `      input:-webkit-autofill:active {\n` +
    `        transition: background-color 5000s ease-in-out 0s;\n` +
    `      }\n` +
    `\n` +
    `      /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n` +
    `      @media (prefers-reduced-motion: reduce) {\n` +
    `        html:focus-within {\n` +
    `          scroll-behavior: auto;\n` +
    `        }\n` +
    `\n` +
    `        *,\n` +
    `        *::before,\n` +
    `        *::after {\n` +
    `          animation-duration: 0.01ms !important;\n` +
    `          animation-iteration-count: 1 !important;\n` +
    `          scroll-behavior: auto !important;\n` +
    `          transition-duration: 0.01ms !important;\n` +
    `        }\n` +
    `      }\n` +
    `\n` +
    `      input[type="checkbox"] {\n` +
    `        margin: 0;\n` +
    `      }\n` +
    `    </style>\n` +
    `    <!-- emailStyles -->\n` +
    `    <style>\n` +
    `      /* 969696969696969696969696969696969696969696969696969696 */\n` +
    `\n` +
    `      body {\n` +
    `        font-family: "Major Mono Display", monospace;\n` +
    `        font-optical-sizing: auto;\n` +
    `        font-size: clamp(0.75rem, 1.25vw, 0.813rem);\n` +
    `        background: rgb(33, 33, 33);\n` +
    `        color: whitesmoke;\n` +
    `      }\n` +
    `\n` +
    `      #content {\n` +
    `        height: 100%;\n` +
    `        width: 100%;\n` +
    `      }\n` +
    `\n` +
    `      /* 969696969696969696969696969696969696969696969696969696 */\n` +
    `\n` +
    `      header {\n` +
    `        display: grid;\n` +
    `        padding-top: 1rem;\n` +
    `        place-items: center;\n` +
    `        margin-bottom: 1rem;\n` +
    `      }\n` +
    `\n` +
    `      header #cyclone-c-logo-container {\n` +
    `        position: relative;\n` +
    `      }\n` +
    `\n` +
    `      header #cyclone-c-logo-container img {\n` +
    `        filter: drop-shadow(0 0 9px #25f8e7); /* var(--neon-blue) */\n` +
    `        width: 55vw;\n` +
    `      }\n` +
    `\n` +
    `      /* 969696969696969696969696969696969696969696969696969696 */\n` +
    `\n` +
    `      main {\n` +
    `        align-items: center;\n` +
    `        display: flex;\n` +
    `        flex-direction: column;\n` +
    `        justify-content: center;\n` +
    `        padding-inline: 1rem;\n` +
    `      }\n` +
    `\n` +
    `      main h2 {\n` +
    `        color: black;\n` +
    `        font-family: "Gasoek One", monospace;\n` +
    `        text-transform: uppercase;\n` +
    `        font-size: clamp(3rem, 9vw, 6rem);\n` +
    `        margin-bottom: 1rem;\n` +
    `        margin-inline: 1.5rem;\n` +
    `        text-shadow: 0 0 9px #25f8e7; /* var(--neon-blue) */\n` +
    `      }\n` +
    `\n` +
    `      main #form-data-ul {\n` +
    `        border-radius: 40px;\n` +
    `        background: #212121;\n` +
    `        box-shadow: inset 10px 10px 20px #181818, inset -10px -10px 20px #2a2a2a;\n` +
    `        display: flex;\n` +
    `        flex-direction: column;\n` +
    `        list-style-type: none;\n` +
    `        margin-bottom: 3rem;\n` +
    `        padding: 1.5rem;\n` +
    `        row-gap: 1rem;\n` +
    `      }\n` +
    `\n` +
    `      main #form-data-ul .field-li:not(:last-of-type) {\n` +
    `        border-bottom: 1px dotted silver;\n` +
    `        border-color: #25f8e7;\n` +
    `        gap: 1rem;\n` +
    `        padding-bottom: 0.5rem;\n` +
    `      }\n` +
    `\n` +
    `      main #form-data-ul .field-name-container {\n` +
    `        margin-bottom: 0.5rem;\n` +
    `      }\n` +
    `\n` +
    `      main #form-data-ul .field-name-container span {\n` +
    `        display: inline-block;\n` +
    `        font-family: "Pixelify Sans", monospace;\n` +
    `        font-size: clamp(1rem, 2.1vw, 1.313rem);\n` +
    `      }\n` +
    `\n` +
    `      main #form-data-ul .field-name-container span::before {\n` +
    `        content: "⦖ ";\n` +
    `      }\n` +
    `\n` +
    `      main #form-data-ul .field-name-container span::after {\n` +
    `        content: ": ";\n` +
    `      }\n` +
    `\n` +
    `      main #form-data-ul .value-container {\n` +
    `        position: relative;\n` +
    `      }\n` +
    `\n` +
    `      main #form-data-ul .value-container span {\n` +
    `        vertical-align: 6px;\n` +
    `      }\n` +
    `\n` +
    `      /* 969696969696969696969696969696969696969696969696969696 */\n` +
    `\n` +
    `      footer {\n` +
    `        align-items: center;\n` +
    `        display: flex;\n` +
    `        flex-direction: column;\n` +
    `        margin-bottom: 1rem;\n` +
    `        row-gap: 0.5rem;\n` +
    `      }\n` +
    `\n` +
    `      footer #footer-text-container {\n` +
    `        position: relative;\n` +
    `      }\n` +
    `\n` +
    `      footer #footer-text-container p {\n` +
    `        font-size: clamp(0.625rem, 1vw, 0.813rem);\n` +
    `        text-align: center;\n` +
    `      }\n` +
    `\n` +
    `      footer #footer-text-container p:not(:last-of-type) {\n` +
    `        margin-bottom: 0.5rem;\n` +
    `      }\n` +
    `\n` +
    `      footer #cyclone-logo-container {\n` +
    `        position: relative;\n` +
    `      }\n` +
    `\n` +
    `      footer #cyclone-logo-container img {\n` +
    `        filter: drop-shadow(0 0 3px whitesmoke); /* var(--neon-blue) */\n` +
    `        height: auto;\n` +
    `        width: 66px;\n` +
    `      }\n` +
    `\n` +
    `      /* 969696969696969696969696969696969696969696969696969696 */\n` +
    `    </style>\n` +
    `  </head>\n` +
    `  <body>\n` +
    `    <content id="content">\n` +
    `      <header>\n` +
    `        <div id="cyclone-c-logo-container">\n` +
    `          <img\n` +
    `            src="https://cyclone-studios.s3.us-east-2.amazonaws.com/s3_cyclone-studios/alphaLogos/cycloneC/animated/gif+files/realistic-black-outline.gif"\n` +
    `          />\n` +
    `        </div>\n` +
    `      </header>\n` +
    `      <main>\n` +
    `        <h2>New Order Request Zaddy:</h2>\n` +
    `        <ul id="form-data-ul">\n` +
    `          <li class="field-li">\n` +
    `            <div class="field-name-container"><span>name</span></div>\n` +
    `            <div class="value-container"><span>${name}</span></div>\n` +
    `          </li>\n` +
    `          <li class="field-li">\n` +
    `            <div class="field-name-container"><span>email</span></div>\n` +
    `            <div class="value-container"><span>${email}</span></div>\n` +
    `          </li>\n` +
    `          <li class="field-li">\n` +
    `            <div class="field-name-container"><span>phone</span></div>\n` +
    `            <div class="value-container"><span>${phone ? phone : 'n/a'}</span></div>\n` +
    `          </li>\n` +
    `          <li class="field-li">\n` +
    `            <div class="field-name-container"><span>collective_type</span></div>\n` +
    `            <div class="value-container"><span>${collective_type}</span></div>\n` +
    `          </li>\n` +
    `          <li class="field-li">\n` +
    `            <div class="field-name-container"><span>garment_type</span></div>\n` +
    `            <div class="value-container"><span>${garment_type}</span></div>\n` +
    `          </li>\n` +
    `          <li class="field-li">\n` +
    `            <div class="field-name-container"><span>color</span></div>\n` +
    `            <div class="value-container"><span>${color}</span></div>\n` +
    `          </li>\n` +
    `          <li class="field-li">\n` +
    `            <div class="field-name-container"><span>quantity</span></div>\n` +
    `            <div class="value-container"><span>${quantity}</span></div>\n` +
    `          </li>\n` +
    `          <li class="field-li">\n` +
    `            <div class="field-name-container"><span>vision</span></div>\n` +
    `            <div class="value-container">\n` +
    `              <span\n` +
    `                >${vision}</span\n` +
    `              >\n` +
    `            </div>\n` +
    `          </li>\n` +
    `        </ul>\n` +
    `      </main>\n` +
    `      <footer>\n` +
    `        <div id="footer-text-container">\n` +
    `          <p>© 2024 Collective Cloth.</p>\n` +
    `          <p>All rights reserved.</p>\n` +
    `        </div>\n` +
    `        <div id="cyclone-logo-container">\n` +
    `          <img\n` +
    `            id="cyclone-logo"\n` +
    `            src="https://cyclone-studios.s3.us-east-2.amazonaws.com/s3_cyclone-studios/alphaLogos/cycloneStudios/cycloneStudios.svg"\n` +
    `          />\n` +
    `        </div>\n` +
    `      </footer>\n` +
    `    </content>\n` +
    `  </body>\n` +
    `</html>`;

  return htmlContent;
}

