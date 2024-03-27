// * MARKUP UTITLITIES
import { createCarousel } from "../../utilities/markdown/create-carousel/carousel-markup";

/**
 * Element Identifiers:
 * @article <article> -> .who-are-we-text-content
 * @heading <h3> -> #who-are-we-heading
 * @logo <img> -> #heading-logo.company-logo
 * @logoText <h1> -> #heading-logo-text .company-name
 */

export function createWhoAreWeSection(carouselImages) {
  const whoAreWeSection = document.createElement('section');
  whoAreWeSection.setAttribute('id', 'who-are-we');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  const carousel = createCarousel(carouselImages);

  const heading = document.createElement('h3');
  heading.setAttribute('id','who-are-we-heading');
  heading.textContent = 'Who Are We?';

  const paragraphOne = document.createElement('p');
  paragraphOne.classList.add('article-text-content');
  paragraphOne.textContent = 'Conceived to craft custom couture for your collective, our company champions the creation of cohesive, captivating clothing that celebrates your unique camaraderie and character.';

  const paragraphTwo = document.createElement('p');
  paragraphTwo.classList.add('article-text-content');
  paragraphTwo.textContent = 'From competitive teams to corporate circles, we commit to customizing chic, comfortable compositions. Utilizing choice materials and cutting-edge design techniques, we convert your vision into a wearable canvas, capturing the essence of your unity.';

  const paragraphThree = document.createElement('p');
  paragraphThree.classList.add('article-text-content');

  const whoAreWeArticle = document.createElement('article');
  whoAreWeArticle.setAttribute('id', 'who-are-we-text-content');
  whoAreWeArticle.append(
    heading,
    paragraphOne,
    paragraphTwo
  );

  contentContainer.append(
    carousel,
    whoAreWeArticle
  );

  whoAreWeSection.append(contentContainer);

  return whoAreWeSection;
}