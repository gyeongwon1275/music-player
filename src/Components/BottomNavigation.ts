function BottomNavigation({ onClick }) {
  const tabContainer = document.createElement('tab-container')

  tabContainer.innerHTML = `<div role="tablist">
    <button role="tab" data-url="/top5">Tab one</button>
    <button role="tab" data-url="/playlist">Tab Two</button>
    <button role="tab" data-url="/search">Tab Three</button>
  </div>`
  tabContainer.addEventListener('tab-selected', onClick)

  return tabContainer
}

export default BottomNavigation
