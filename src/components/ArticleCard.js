import React from 'react'
import { Card } from 'react-bootstrap'
import '../styles/ArticleCard.css'

function ArticleCard() {
  return (
    <div>
        <Card className='articleCard'>
           <Card.Img src='../Article2.jpg'/>
           <Card.Header>
              Vipul Kumar Tiwari
           </Card.Header>
           <Card.Body>
            <Card.Text>
              This is a card where you can give a short desc to your Card
            </Card.Text>
            <Card.Footer>
              `Author:Vipul 
              Dated :03/02/2024`
            </Card.Footer>
           </Card.Body>

        </Card>
    </div>
  )
}

export default ArticleCard
