import Link from "next/link";
import marked from 'marked';
import Header from "../../../../components/Header";
import Container from "../../../../components/Container";
import Title from "../../../../components/Title";
import Card from "../../../../components/Card";
import SubTitle from "../../../../components/SubTitle";

const PageList = ({ html }) => {
  return (
      <>
      <Header
        title={'title'}
        />
      <Container>
        <Title text={'Quem somos'} />
        <Card>
          <div
            dangerouslySetInnerHTML={{
              __html: html
            }}
          />
        </Card>
      </Container>
    </>
  )
}

export async function getServerSideProps({ params: { slug } }) {
  try {
    const html = marked('# Marked in the browser\n\nRendered by **marked**.');

    return { props: { html } }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default PageList;