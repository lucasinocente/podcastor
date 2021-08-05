import Link from "next/link";
import Header from "../../../components/Header";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Card from "../../../components/Card";
import SubTitle from "../../../components/SubTitle";

const PageList = () => {
  const list = [
    {
      name: 'Quem somos',
      slug: 'quem-somos',
    }
  ]
  return (
      <>
      <Header
        title={'title'}
      />
      <Container>
        <Title text={'Pages from Sabe de Nada, Inocente!'} />
        { list.map(({
          name,
          slug
        }) => (
          <>
            <Link href={`/${slug}`}>
              <a>
                <Card>
                    <SubTitle>{name} &rarr;</SubTitle>
                </Card>
              </a>
            </Link>
          </>
        ))}
      </Container>
    </>
  )
}

export default PageList;