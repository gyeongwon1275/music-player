import { createBrowserHistory } from './utils/history';

type Route = {
  url: string;
  element: HTMLElement;
};

class Routes {
  private routeList: Route[];

  constructor(routeList: Route[]) {
    this.routeList = routeList;
  }

  getRouteList() {
    return this.routeList;
  }

  init() {
    /*    window.onpopstate = () => {
      const root = document.querySelector('#app') as HTMLDivElement;
      root.innerHTML = '';

      const { element } = this.getRouteList().find(
        ({ url }) => url === window.location.pathname
      ) as Route;

      root.appendChild(element);

      console.log('onpopstate', window.location.pathname);
    }; */
    const history = createBrowserHistory();
    history.listen(({ location }) => {});

    setTimeout(() => {
      history.push('/test');
    }, 3000);
  }
}

export default Routes;
