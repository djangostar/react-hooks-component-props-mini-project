import React from "react"

const emojiLi = (minutes) => {
    const time = minutes < 30 ? 5 : 10
    const emoji = minutes < 30 ? "☕️ " : "🍱"

    let emojis = ""
    for (let i = 0; i < minutes; i+= time) {
        emojis += emoji
    }
    return emojis
}

const Article = ({title, date="January 1, 1970", preview, minutes }) => {

    const emojis = emojiLi(minutes)

    return (
    <article>
        <h3>{ title }</h3>
        <small>{ date } {emojis} {minutes}</small>
        <p>{ preview }</p>
    </article>
    )
}

export default Article