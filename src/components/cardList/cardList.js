import { DivComponent } from '../../common/div-component';
import './cardList.css';

export class CardList extends DivComponent {
  constructor(appState, state) {
    super();
    this.appState = appState;
    this.state = state;
  }

  render() {
    if (this.state.loading === true) {
      this.el.innerHTML = `<div class="cardList__loader">Loading...</div>`;
      return this.el;
    }
    this.el.classList.add('cardList');
    this.el.innerHTML = `
        <div class="cardList">
            <h1>Найдено книг – ${this.state.list.length}</h1>
        </div>
    `;
    return this.el;
  }
}
