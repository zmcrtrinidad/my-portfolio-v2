import '../styles/globals.css'
import Layouts from '../components/Layouts'

import '@fortawesome/fontawesome-free/css/all.css';


// ...

function MyApp({ Component, pageProps }) {
  return (
    <Layouts >
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
