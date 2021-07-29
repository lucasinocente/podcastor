import Page from '../components/Page'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
)

export default App;
