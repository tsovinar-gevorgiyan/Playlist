import { Song } from "./Songs"

export const Playlist = ({ items, onDelete, onMove }) => {
  return (
    <div>
      {items.map(song => <Song {...song} key={song.id} onDelete={onDelete} onMove={onMove} inPlaylist={true} />)}
    </div>
  )
}
