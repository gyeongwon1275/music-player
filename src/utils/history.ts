export function createBrowserHistory() {
  const globalHistory = window.history;

  const listeners = createEvents();

  function createEvents() {
    const handlers: Function[] = [];

    return {
      call(location: Location) {
        handlers.forEach((fn) => fn && fn(location));
      },
      push(listener: Function) {
        handlers.push(listener);
      },
    };
  }

  const callListeners = () => {
    listeners.call(window.location);
  };

  return {
    push(to: string) {
      globalHistory.pushState(null, '', to);
      callListeners();
    },
    replace(to: string) {
      globalHistory.replaceState(null, '', to);
      callListeners();
    },
    listen(listener: Function) {
      return listeners.push(listener);
    },
  };
}

export type History = ReturnType<typeof createBrowserHistory>;
