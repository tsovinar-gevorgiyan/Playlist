import { useState } from 'react'
import './App.css'
import { Song } from './Songs'
import { Songlist } from './Songlist'
import { Playlist } from './Playlist'

function App() {
  const [songs, setSongs] = useState([
    { id: 101, title: "Symphony N40", artist: "Mozart", duration: 20 },
    { id: 102, title: "Toxicity", artist: "SOAD", duration: 30 },
    { id: 103, title: "Yesterday", artist: "Beatles", duration: 50 },
    { id: 104, title: "Hello", artist: "Adele", duration: 60 }
  ])

  const [playlist, setPlaylist] = useState([])

  const removeSongFromList = id => {
    setSongs(songs.filter(song => song.id !== id))
  }

  const removeSongFromPlaylist = id => {
    setPlaylist(playlist.filter(song => song.id !== id))
  }

  const addSongToPlaylist = id => {
    const songToAdd = songs.find(song => song.id === id)
    if (!playlist.find(song => song.id === id)) {
      setPlaylist([...playlist, songToAdd])
    }
  }

  const moveSongDown = id => {
    const index = playlist.findIndex(song => song.id === id)
    if (index < playlist.length - 1) {
      const newPlaylist = [...playlist]
      ;[newPlaylist[index], newPlaylist[index + 1]] = [newPlaylist[index + 1], newPlaylist[index]]
      setPlaylist(newPlaylist)
    }
  }

  return (
    <div>
      <h1>Songs</h1>
      <Songlist items={songs} onDelete={removeSongFromList} onAddToPlaylist={addSongToPlaylist} />
      <h1>Playlist</h1>
      <Playlist items={playlist} onDelete={removeSongFromPlaylist} onMove={moveSongDown} />
    </div>
  );
}

export default App;
