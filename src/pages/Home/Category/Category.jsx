import React from 'react'
import { Routes, Route, useParams, useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
let { id } = useParams();
const categoryNews = useLoaderData();
console.log(categoryNews.length)
return (
<div>
    {id && <h2>This is category:{categoryNews.length}</h2>}
    {
        categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
    }
</div>
)
}

export default Category