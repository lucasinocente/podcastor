import Page from '../components/Page'

const App = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
)

export default App;
