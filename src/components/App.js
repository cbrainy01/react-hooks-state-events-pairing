import React, {useState} from "react"
import video from "../data/video.js";
import Votes from "./Votes.js";
import Comments from "./Comments.js";



function App() {
  //console.log("Here's your data:", video);

  const [upvoteCount, setUpVoteCount] = useState(video.upvotes);
  const [downvoteCount, setDownVoteCount] = useState(video.downvotes);
  
  function handleUpClick(currentVotes) {
    currentVotes++
    setUpVoteCount(currentVotes);
  }
  function handleDownClick(currentVotes) {
    currentVotes++
    setDownVoteCount(currentVotes);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p> {video.views} Views  |  Uploaded {video.createdAt}</p>
      <Votes
       onUpClick={handleUpClick}
       onDownClick={handleDownClick}
       upvoteCount={upvoteCount} downvoteCount={downvoteCount} />

      <Comments commentsArray={video.comments}/>
    </div>
  );
}

export default App;
