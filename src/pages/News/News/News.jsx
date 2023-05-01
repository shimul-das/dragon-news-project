import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft} from "react-icons/fa";
import { Routes, Route, useParams, useLoaderData, Link } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';
const News = () => {
  const news=useLoaderData();
  const {title,details,_id,image_url,author,total_view,rating,category_id}=news;
  return (
    <div>
        <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/catagorie/${category_id}`}><Button variant="danger"><FaArrowLeft className='me-2'></FaArrowLeft>All News in this category</Button></Link>
      </Card.Body>
    </Card>
    <div className='mt-3'>
    <EditorsInsights></EditorsInsights>
    </div>
    
    </div>
  )
}

export default News