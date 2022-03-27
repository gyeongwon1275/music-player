import '../src/Components/Intro';
import { Routes } from '../src/Components';

(function () {
  const routes = new Routes([
    {
      url: 'list',
      element: document.createElement('a'),
    },
  ]);

  
  routes.init();
})();

