import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

class App extends Component {
  render() {
    const gifs =[
      { id: "U7n5Ydmfp8FCasg4FF/giphy.gif?cid=ecf05e47dfe9ae202ef400719e99087bb34c37c7c775bbc7&rid=giphy" },
      { id: "XEmTU9YxsxYESl6JPh/giphy.gif?cid=ecf05e47eef8c7079571f72ca169f0b96164276b10d4ac29&rid=giphy" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="U7n5Ydmfp8FCasg4FF/giphy.gif?cid=ecf05e47dfe9ae202ef400719e99087bb34c37c7c775bbc7&rid=giphy"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
      );
  }
}

export default App;

