export const Song = ({ title, artist, duration, id, onDelete, inPlaylist, onMove, onAddToPlaylist }) => {
  return (
    <div className="song">
      <p>{title}</p>
      <strong>By {artist}</strong>
      <button onClick={() => onDelete(id)}>Delete</button>
      {!inPlaylist && <button onClick={() => onAddToPlaylist(id)}>Add to Playlist</button>}
      {inPlaylist && <button onClick={() => onMove(id)}>Move Down</button>}
      <br/>
      <small> {duration} sec.</small>
      
    </div>
  )
}
