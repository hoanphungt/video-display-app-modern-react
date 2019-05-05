import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

export default class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onSubmit('Mama mia the movie')
    }

    onSubmit = async input => {
        const response = await youtube.get('/search/', {
            params: {
                q: input
            }
        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onClick = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videos={this.state.videos} onClick={this.onClick} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}