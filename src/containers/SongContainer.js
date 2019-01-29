import React, {Component} from 'react';
import SongDetail from '../components/SongDetail.js';
import SongSelector from '../components/SongSelector.js';

class SongContainer extends Component {

  constructor(props) {
    super(props);
    this.states = {
      songs: [],
      currentSong: null
    }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry}));
  }

  render() {
    return(
      <>
      <h2>iTunes Top20</h2>
      <SongSelector />
      <SongDetail />
      </>
    )
  }

}

export default SongContainer;
