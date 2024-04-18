import React from 'react'
import { Card } from 'react-bootstrap'
import '../styles/ArticleCard.css'

function ArticleCard() {
  return (
    <div>
        <Card className='articleCard'>
           <Card.Img src='../CAT_Artworks_11_yqovnx.jpg'/>
           <Card.Header>
              Vipul Kumar Tiwari
           </Card.Header>
           <Card.Body>
            <Card.Text>
              This is a card where you can give a short desc to your Card
            </Card.Text>
           </Card.Body>

        </Card>
    </div>
  )
}

export default ArticleCard
