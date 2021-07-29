import Head from './Head';

const Page = ({ children }) => (
  <>
    <Head />
    <div className="container">
      { children }
    </div>
  </>
)

export default Page;