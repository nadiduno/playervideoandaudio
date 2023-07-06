import { useState } from 'react';

interface Props {
  videoId: string;
}



export function VideoPlayer(props: Props) {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=${playing ? 1 : 0}`}
        allowFullScreen
        title="YouTube video player"
        width="640"
        height="360"
      />
      <button onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
}
