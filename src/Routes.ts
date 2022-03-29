import { History } from './utils/history';

type Route = {
  url: string;
  element: HTMLElement;
};

class Routes {
  private routeList: Route[];

  constructor(routeList: Route[], container: HTMLElement, history: History) {
    this.routeList = routeList;
    this.render(container);

    history.listen(() => {
      this.render(container);
    });

    setTimeout(() => {
      history.push('/test2');
    }, 5000);
  }

  render(container: HTMLElement) {
    const path = window.location.pathname;
    const { element } = this.getRouteList().find(
      ({ url }) => url === path
    ) as Route;

    container.firstChild?.remove();
    container.appendChild(element);
  }
  getRouteList() {
    return this.routeList;
  }
}

export default Routes;
