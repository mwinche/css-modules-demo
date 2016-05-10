import styles from './styles.css';

export default class{
  constructor(){
    this.element = document.createElement('div');
    this.element.className = styles.footer;

    this.element.innerHTML = `
      <span class="${styles.text}">😍 🎵 So happy together 🎵 😍</span>
    `;
  }

  getElement(){
    return this.element;
  }
};
