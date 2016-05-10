import styles from './styles.css';

export default class{
  constructor(){
    this.element = document.createElement('div');
    this.element.className = styles.body;

    this.element.innerHTML = `
<pre class="${styles.javascript}">
import styles from "./styles.css";

document.body.innerHTML=\`
  &lt;div class="\${styles.myClass}"&gt;Content&lt;/div&gt;
\`;
</pre>

<pre class="${styles.css}">
.myClass{
  background: #999;
  padding: 10px;
  border: 1px solid black;
}
</pre>
    `;
  }

  getElement(){
    return this.element;
  }
};
