import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemSearch = ({data}) => {

    console.log(data)
  return (
    <div>
         <Card className='my-2' style={{ width: '18rem' }}>
      <Card.Img className='imgFluid imgThumbnail' variant="top" src={data.image_url}/>
      <Card.Body className='d-flex flex-column '>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text
        className='text-truncate'
        style={{'maxWidth': '500px', 'overflowY':'hidden'}}
        >
          {data.description || <p>Contenido no disponible</p>}
        </Card.Text>
        <Button href={data.link} variant="primary">Ir a la noticia</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
