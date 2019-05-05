import React from 'react';
import './VideoItem.css';

const VideoItem = props => {
    const { video, onClick } = props

    return (
        <div onClick={() => onClick(video)} className='video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt='video' />
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    )
};

export default VideoItem