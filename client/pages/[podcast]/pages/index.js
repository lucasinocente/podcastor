import Link from "next/link";
import Header from "../../../components/Header";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Card from "../../../components/Card";
import SubTitle from "../../../components/SubTitle";
import Button from "../../../components/Button";

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
            <Card>
              <div className="columns">
                <Link key={slug} href={`/${slug}`}>
                  <a>
                    <SubTitle>
                      {name} &rarr;
                    </SubTitle>
                  </a>
                </Link>
                <Link key={slug} href={`/${slug}`}>
                  <a>
                    <Button>
                      Editar
                    </Button>
                  </a>
                </Link>
              </div>
            </Card>
          </>
        ))}
        { list.map(({
          name,
          slug
        }) => (
          <>
            <Card>
              <div>
                <Link key={slug} href={`/${slug}`}>
                  <a>
                    <SubTitle>
                      {name} &rarr;
                    </SubTitle>
                  </a>
                </Link>
              </div>
            </Card>
          </>
        ))}
      </Container>
    </>
  )
}

export default PageList;