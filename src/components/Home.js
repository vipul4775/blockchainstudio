import { Carousel, Card, NavLink, Button } from "react-bootstrap";
import "../styles/Home.css";
import ArticleCard from "./ArticleCard";
import "../styles/ArticleCard.css";

function Home() {
  return (
    <div>
      <div className="slides">
        <h2> Popular Articles</h2>
        <Carousel style={{ borderRadius: "20px" }}>
          <Carousel.Item style={{ borderRadius: "20px" }}>
            <Card style={{ borderRadius: "20px" }}>
              <Card.Img src="../Artcle1.avif" />

              <Card.Header>BitCoin Halving</Card.Header>
            </Card>
          </Carousel.Item>

          <Carousel.Item style={{ borderRadius: "20px" }}>
            <Card style={{ borderRadius: "20px" }}>
              <Card.Img src="../unlock.jpg" />
              <Card.Header> Join CatTutorials</Card.Header>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>

      <hr className="horizontal-line" />

      <div className="cardgroup">
        <div className="cardgroup-header">
          <h2> Crypto News</h2>
          <Button> View All</Button>
        </div>
        <div className='cardgroup-body'>
          <ArticleCard style={{margin:'100px'}}></ArticleCard> 
          <ArticleCard />
          <ArticleCard />
          {/* <ArticleCard /> */}
        </div>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
}

export default Home;
