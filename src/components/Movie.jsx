import React from 'react'

export default function Movie( { title, poster_path, vote_average}) {
    return (
        <div className='movie-container'>
            <img />
            <div className={'movie-info'}>
                <h4>제목</h4>
                <span>평점</span>
            </div>
        </div>
    )
}
