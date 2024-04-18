import { Carousel, Card, NavLink } from "react-bootstrap";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <h2> Popular Articles</h2>

      <div className="slides">
        <Carousel className="carousel">
          <Carousel.Item>
            <Card >
              <Card.Img src="../Artcle1.avif" />

              <Card.Header>BitCoin Halving</Card.Header>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card>
              <Card.Img src="../unlock.jpg" />
              <Card.Header> Join CatTutorials</Card.Header>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>

      <hr className="horizontal-line" />
      <div>
        <h2> Some More Popular Articles</h2>
        
      </div>
    </div>
  );
}

export default Home;
