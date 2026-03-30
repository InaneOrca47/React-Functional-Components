const React = require('react');
const { createRoot } = require('react-dom/client');
const { useState, useEffect } = React;

const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);

    useEffect(() => {
        const loadSongsFromServer = async () => {
            const response = await fetch('/getSongs');
            const data = await response.json();
            setSongs(data);
        }
        loadSongsFromServer();
    }, []);

    if (songs.length === 0) {
        return (
            <div>
                <h3>No Songs Yet!</h3>
            </div>
        );
    }

    const songList = songs.map(song => {
        return (<div key={song.title}>
            <h2>{song.artist} - <i>{song.title}</i></h2>
        </div>);
    });

    return (
        <div>
            <h1>My Favorite Songs</h1>
            {songList}
        </div>
    );
}

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<SongContainer songs={[]} />);
}

window.onload = init;