import React from 'react'


// 💪 shout to Triana and Simon from June. I totally forgot about the possibility of an Entry component. This goes to show that good planning practices are critical to successful and complete development. I need to start doing more organizing and planning ahead of these projects.
export default function Entry({entry}) {
    return (
        <article>
            <h3>{entry.username}</h3>
            <p>{entry.entry}</p>
        </article>
    )
}
