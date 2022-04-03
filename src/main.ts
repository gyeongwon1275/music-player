import '../src/Components'
import { BottomNavigation } from './Components'
import Intro from './Pages/Intro'
import Routes from './Routes'
import { createBrowserHistory } from './utils/history'
;(function () {
  const history = createBrowserHistory()

  new Routes(
    [
      {
        url: '/',
        element: Intro({
          onFinished: () => {
            history.push('/playlist')
          },
        }),
      },
      {
        url: '/playlist',
        element: BottomNavigation({
          onClick: (event) => {
            const dataset = event.target?.dataset
            history.push(dataset?.url)
          },
        }),
      },
      {
        url: '/search',
        element: document.createElement('div'),
      },
    ],
    document.querySelector('#app') as HTMLElement,
    history
  )
})()
