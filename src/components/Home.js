
import { Carousel, Card, NavLink, Button } from "react-bootstrap";
import "../styles/Home.css";
import ArticleCard from "./ArticleCard";
import "../styles/ArticleCard.css";
import { Route,Link } from "react-router-dom";

function Home() {
 
  return (
    <div>
      <div className="slides">
        <h2> Popular Articles</h2>
        <Carousel style={{ borderRadius: "20px" }}>
          <Carousel.Item style={{ borderRadius: "20px" }}>
            <Card style={{ borderRadius: "20px" }}>
              <Card.Img src="../slides1.jpg" />

              <Card.Header>BitCoin Halving</Card.Header>
            </Card>
          </Carousel.Item>

          <Carousel.Item style={{ borderRadius: "20px" }}>
            <Card style={{ borderRadius: "20px" }}>
              <Card.Img src="../Slides2.jpg" />
              <Card.Header> Bitcoin Dominance</Card.Header>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>

      <hr className="horizontal-line" />

      <div className="cardgroup">
        <div className="cardgroup-header">
          <h2> Crypto News</h2>
          <Link to="/articles">
          <Button > View All</Button>
          </Link>
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
