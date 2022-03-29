export default class Intro {
  createElement() {
    const $intro = document.createElement('x-intro');
    $intro.innerHTML = `<img src="./src/images/intro.png" alt="splaash-screen" />`;

    return $intro;
  }
}
