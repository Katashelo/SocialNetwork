import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import s from './News.module.css';

const News = () => {
    const news = [
        {id:1, news:'Ukraine:', link:"https://daruse.ru/zadaniya-po-react-dlya-prokachki"},
        {id:2, news:'Ukraine:', link:"https://daruse.ru/zadaniya-po-react-dlya-prokachki"},
        {id:3, news:'Ukraine:', link:"https://daruse.ru/zadaniya-po-react-dlya-prokachki"},
    ];
    let res = news.map(n => <div key={n.id}> <h1>{n.news}</h1> <div>{n.link}</div>  </div>)

    return <div>{res}</div>
};

export default News;