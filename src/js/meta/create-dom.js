// * COMPONENTS 
import { createHeader } from '../markup/header.js';
import { createCallToActionSection } from '../markup/call-to-action.js';
import { createConnectionsSection } from '../markup/connections.js';
import { createWhoAreWeSection } from '../markup/who-are-we.js';
import { createHowDoesItWorkSection } from '../markup/how-does-it-work.js';
import { createStartTheProcessSection } from '../markup/start-the-process.js';
import { createFooter } from '../markup/footer.js';
import { createResponseModal } from '../markup/create-response.modal.js';

// * DATA
import connections from '../../json/connections.json' with { type: 'json' };
import carouselImages from '../../json/carousel-images.json' with { type: 'json' };
import instructions from '../../json/instructions.json' with { type: 'json' };
import form from '../../json/form.json' with { type: 'json' };
import companyInfo from '../../json/company-info.json' with { type: 'json' };

// * STYLES
import '../../sass/main.scss';

// > --------------------------------------------------------------

export function createDOM() {
  const content = document.getElementById('content');

  content.append(
    createHeader(),
    createCallToActionSection(),
    createConnectionsSection(connections),
    createWhoAreWeSection(carouselImages),
    createHowDoesItWorkSection(instructions),
    createStartTheProcessSection(form),
    createFooter(companyInfo),
    createResponseModal()
  );
}