import '../src/Components';
import Intro from './Pages/Intro';
import Routes from './Routes';
import { createBrowserHistory } from './utils/history';

(function () {
  const history = createBrowserHistory();

  new Routes(
    [
      {
        url: '/',
        element: new Intro().createElement(),
      },
      {
        url: '/test2',
        element: document.createElement('span'),
      },
      {
        url: '/test3',
        element: document.createElement('div'),
      },
    ],
    document.querySelector('#app') as HTMLElement,
    history
  );
})();
