import { Song } from "./Songs"

export const Songlist = ({ items, onDelete, onAddToPlaylist }) => {
  return (
    <div>
      {items.map(el => <Song key={el.id} {...el} onDelete={onDelete} onAddToPlaylist={onAddToPlaylist} />)}
    </div>
  )
}
