import React from "react"
import Article from "./Article"

function ArticleList({posts}) {
    const articleLi = posts.map((post) => (
        <Article 
            key={post.id}
            date={post.date}
            minutes={post.minutes}
            preview={post.preview}
            title={post.title}
        />  
    ));
    return <main>{articleLi}</main>
}

export default ArticleList