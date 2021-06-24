import { Provider } from 'react-redux'
import { useStore } from './../state/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/styles.scss'


export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
