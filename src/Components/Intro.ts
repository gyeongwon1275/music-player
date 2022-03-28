if (!window.customElements.get('x-intro')) {
  window.customElements.define(
    'x-intro',
    class extends HTMLElement {
      private _time: number;

      constructor() {
        super();

        this._time = Number(this.getAttribute('time'));
        this.open = true;
      }

      get open() {
        return this.hasAttribute('open');
      }

      set open(val) {
        if (val) {
          this.setAttribute('open', '');
        } else {
          this.removeAttribute('open');
        }
      }

      connectedCallback() {
        setTimeout(() => {
          this.open = false;
        }, this._time || 3000);
      }
    }
  );
}
