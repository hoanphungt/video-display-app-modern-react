import React from 'react';
import VideoItem from './VideoItem';


export default class VideoList extends React.Component {
    render() {
        return (
            <div className='ui relaxed divided list'>
                {this.props.videos.map(video => <VideoItem key={video.id.videoId} video={video} onClick={this.props.onClick}/> )}
            </div>
        )
    }
}