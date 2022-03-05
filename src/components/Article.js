import React from "react"

const makeEmojis = (minutes) => {
    const time = minutes < 30 ? 5 : 10
    const emoji = minutes < 30 ? "☕️" : "🍱"

    let emojis = ""
    for (let i = 0; i < minutes; i += time) {
        emojis += emoji
    }
    return emojis 
}

function Article({title, date="January 1, 1970", preview, minutes}) {

    const emojis = makeEmojis(minutes)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {emojis} {minutes}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article