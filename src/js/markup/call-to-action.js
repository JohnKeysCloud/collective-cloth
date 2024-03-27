// TODO: import shirt image
import { createImage } from '../../utilities/markdown/create-image';

// > --------------------------------------------------------------

/**
 * Element Identifiers:
  * @callToActionLeft <div> -> #call-to-action-left
  * @heading <h1> -> #call-to-action-heading
  * @aiTextNode  <span> -> .call-to-action-ai
  * @subheading <h3> -> #call-to-action-subheading
  * @textContent <p> -> .article-text-content
 */

function createCallToActionLeft() {
  const callToActionLeft = document.createElement('div');
  callToActionLeft.setAttribute('id', 'call-to-action-left');

  const specialSpan = document.createElement('span');
  specialSpan.classList.add('clipped-text');
  specialSpan.textContent = 'show solidarity in style' + ' ';

  const headingEmojiSpan = document.createElement('span');  
  headingEmojiSpan.classList.add('emoji', 'heading-emoji');
  headingEmojiSpan.textContent = '😎';
  
  const heading = document.createElement('h1');
  heading.setAttribute('id', 'call-to-action-heading');
  heading.append(specialSpan, headingEmojiSpan);

  const leftTextNode = document.createTextNode('implementing' + ' ');
  const aiTextNode = document.createElement('span');
  aiTextNode.textContent = 'AI';
  aiTextNode.classList.add('call-to-action-ai');
  const rightTextNode = document.createTextNode(' ' + 'in creative design.');

  const subheading = document.createElement('h3');
  subheading.setAttribute('id', 'call-to-action-subheading');
  subheading.append(leftTextNode, aiTextNode, rightTextNode);

  const paragraphOne = document.createElement('p');
  paragraphOne.classList.add('article-text-content');
  paragraphOne.textContent =
    'Our team, a blend of designers, apparel manufacturers, and business experts, specializes in generating bespoke apparel that reflects the distinct identity of each collective we work with.';
  
  const paragraphTwo = document.createElement('p'); 
  paragraphTwo.classList.add('article-text-content');
  paragraphTwo.textContent = 'We offer a comprehensive service that seamlessly integrates design, production, and delivery, ensuring a tailored experience from start to finish.';

  const callToActionArticle = document.createElement('article');
  callToActionArticle.classList.add('call-to-action-text-content');
  callToActionArticle.append(heading, subheading, paragraphOne, paragraphTwo);

  callToActionLeft.append(callToActionArticle);

  return callToActionLeft;
}

// > --------------------------------------------------------------

/**
 * Element Identifiers:
 * @callToActionRight <div> -> #call-to-action-right
 * @callToActionImage <img> -> #call-to-action-image
 */

function createCallToActionRight() {
  const callToActionRight = document.createElement('div');
  callToActionRight.setAttribute('id', 'call-to-action-right');

  // src, id, classNames, alt, ariaLabel;
  const callToActionImage = createImage(
    'https://collective-cloth.s3.us-east-2.amazonaws.com/static-assets/product_images/animated/team-capsule-large-animated.webp',
    'call-to-action-product-image',
    '',
    '3-Dimensional Product Showcase',
    '3-Dimensional Product Showcase',
    ['800', '800']
  );

  callToActionRight.append(callToActionImage);

  return callToActionRight;
}

// > --------------------------------------------------------------

/**
 * Element Identifiers:
 * @callToActionSection <section> -> #call-to-action
*/

export function createCallToActionSection() {
  const callToActionSection = document.createElement('section');
  callToActionSection.setAttribute('id', 'call-to-action');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  contentContainer.append(
    createCallToActionLeft(),
    createCallToActionRight()
  );

  callToActionSection.append(contentContainer);

  return callToActionSection;
}
