if (!window.customElements.get('x-intro')) {
  window.customElements.define(
    'x-intro',
    class extends HTMLElement {
      private _time: number

      constructor() {
        super()

        this._time = Number(this.getAttribute('time'))
      }

      get open() {
        return this.hasAttribute('open')
      }

      set open(val) {
        if (val) {
          this.setAttribute('open', '')
        } else {
          this.removeAttribute('open')
        }
      }

      connectedCallback() {
        this.open = true
        setTimeout(() => {
          this.open = false
          this.dispatchEvent(
            new CustomEvent('intro-finished', {
              bubbles: true,
            })
          )
        }, this._time || 3000)
      }
    }
  )
}
