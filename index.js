import Toolbar from './toolbar';
import Body from './body';
import Footer from './footer';

const bootstrap = element => {
  const toolbar = new Toolbar();
  const body = new Body();
  const footer = new Footer();

  element.appendChild(toolbar.getElement());
  element.appendChild(body.getElement());
  element.appendChild(footer.getElement());
};

bootstrap(document.body);
