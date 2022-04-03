export default function Intro({ onFinished }) {
  const $intro = document.createElement('x-intro')
  $intro.innerHTML = `<img src="./src/images/intro.png" alt="splaash-screen" />`
  $intro.addEventListener('intro-finished', onFinished)

  return $intro
}
