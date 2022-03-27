export function createBrowserHistory() {
  const globalHistory = window.history;

  const listeners = createEvents();

  function createEvents<F extends Function>() {
    const handlers: F[] = [];

    return {
      call(arg) {
        handlers.forEach((fn) => fn && fn(arg));
      },
    };
  }

  function dispatchHistoryEvent() {
    listeners.call({ location });
  }

  function go(delta: number) {
    globalHistory.go(delta);
  }

  let history = {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    createHref,
    push,
    replace,
    go,
    back() {
      go(-1);
    },
    forward() {
      go(1);
    },
    listen(listener) {
      return listeners.push(listener);
    },
  };
  return {};
}
