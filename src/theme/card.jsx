import React from 'react'

function GitHubLink ({ url }) {
    if (!url) {
        return null
    }

    return (
        <a href={url}
            className="githubProfile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
        >
        </a>
    )
}

export default function Card ({
    name,
    avatar,
    github,
    children
}) {
    return (
        <div className="avatar teamProfile">
            <img
                className="avatar__photo avatar__photo--xl"
                src={ avatar }
            />
            <div className="avatar__intro">
                <h4 className="avatar__name">
                    { name }
                    <GitHubLink url={github && `https://github.com/${github}`} />
                </h4>
                <small className="avatar__subtitle">{ children }</small>
            </div>
        </div>
    )
}