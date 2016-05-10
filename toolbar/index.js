import styles from './styles.css';

export default class{
  constructor(){
    this.element = document.createElement('div');
    this.element.className = styles.header;

    this.element.innerHTML = `
      <span class="${styles.text}">HTML + CSS + JavaScript = ???</span>
    `;
  }

  getElement(){
    return this.element;
  }
};
