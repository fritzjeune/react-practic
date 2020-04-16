// jshint esversion:6
import React from 'react';
import { css } from 'glamor';

const NewsItem = ({item}) => {

    let news_item = css({
        padding:'20px',
        boxSizing:'border-box',
        borderBottom: '1px solid gray'
    });

    let news_gray = css({
        background: 'lightgray'
    });



    return (
        <div {...news_item} {...news_gray}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>
    )
}

export default NewsItem;