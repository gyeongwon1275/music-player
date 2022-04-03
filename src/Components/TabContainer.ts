function getTabs(el: TabContainerElement): HTMLElement[] {
  return Array.from(el.querySelectorAll<HTMLElement>('[role="tab"]')).filter(
    (tab) => tab instanceof HTMLElement && tab.closest(el.tagName) === el
  )
}

function selectTab(tabContainer: TabContainerElement, index: number) {
  const tabs = getTabs(tabContainer)

  const selectedTab = tabs[index]

  tabs.forEach((tab) => {
    tab.setAttribute('aria-selected', 'false')
    tab.setAttribute('tabindex', '-1')
  })

  selectedTab.setAttribute('aria-selected', 'true')
  selectedTab.setAttribute('tabindex', '0')
  selectedTab.focus()

  selectedTab.dispatchEvent(
    new CustomEvent('tab-selected', {
      bubbles: true,
    })
  )
}

class TabContainerElement extends HTMLElement {
  constructor() {
    super()

    this.addEventListener('keydown', (event: KeyboardEvent) => {
      const target = event.target

      if (!(target instanceof HTMLElement)) return
      if (target.closest(this.tagName) !== this) return
      if (
        target.getAttribute('role') !== 'tab' &&
        !target.closest('[role="tablist"]')
      )
        return

      const tabs = getTabs(this)

      const currentIndex = tabs.indexOf(
        tabs.find((tab) => tab.matches('[aria-selected="true"]'))!
      )

      if (event.code === 'ArrowRight') {
        let index = currentIndex + 1
        if (index >= tabs.length) index = 0
        selectTab(this, index)
      } else if (event.code === 'ArrowLeft') {
        let index = currentIndex - 1
        if (index < 0) index = tabs.length - 1
        selectTab(this, index)
      } else if (event.code === 'Home') {
        selectTab(this, 0)
        event.preventDefault()
      } else if (event.code === 'End') {
        selectTab(this, tabs.length - 1)
        event.preventDefault()
      }
    })

    this.addEventListener('click', (event: MouseEvent) => {
      const tabs = getTabs(this)

      if (!(event.target instanceof Element)) return
      if (event.target.closest(this.tagName) !== this) return

      const tab = event.target.closest('[role="tab"]')

      if (!(tab instanceof HTMLElement) || !tab.closest('[role="tablist"]'))
        return

      const index = tabs.indexOf(tab)
      selectTab(this, index)
    })
  }

  connectedCallback(): void {
    const pathname = window.location.pathname

    getTabs(this).forEach((tab) => {
      const url = tab.dataset?.url

      if (!tab.hasAttribute('aria-selected')) {
        tab.setAttribute('aria-selected', 'false')
      }

      if (url === pathname) {
        tab.setAttribute('aria-selected', 'true')
      }

      if (!tab.hasAttribute('tabindex')) {
        if (tab.getAttribute('aria-selected') === 'true') {
          tab.setAttribute('tabindex', '0')
        } else {
          tab.setAttribute('tabindex', '-1')
        }
      }
    })
  }
}

if (!window.customElements.get('tab-container')) {
  window.customElements.define('tab-container', TabContainerElement)
}
