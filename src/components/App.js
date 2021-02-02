import video from "../data/video.js";
function App() {
  const handleClick = (event) => {
    const commentsDiv = document.querySelector(".comments");
    commentsDiv.style.display === "none"
      ? (commentsDiv.style.display = "block") &&
        (event.target.textContent = "Hide Comments")
      : (commentsDiv.style.display = "none") &&
        (event.target.textContent = "Show Comments");
  };
  const commentUsers = video.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <p>{comment.user}</p>
        <p>{comment.comment}</p>
      </div>
    );
  });
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h3>{video.title}</h3>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <button>{video.upvotes}</button>
      <button>{video.downvotes}</button>
      <div>
        <br></br>
        <button class="showHide" onClick={handleClick}>
          Hide Comments
        </button>
      </div>
      <div class="comments">
        <h4>{video.comments.length} Comments</h4>
        {commentUsers}
      </div>
    </div>
  );
}
export default App;
