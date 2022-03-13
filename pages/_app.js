import '../styles/globals.css'
import Layouts from '../components/Layouts'
// _app.js

import '@fortawesome/fontawesome-free/css/all.css';

// ...

function MyApp({ Component, pageProps }) {
  return (
    <Layouts >
      <Component {...pageProps} />
      <script src="https://unpkg.com/tippy.js@4"></script>
    </Layouts>
  )
}

export default MyApp
