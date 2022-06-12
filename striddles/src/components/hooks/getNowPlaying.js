import { useState, useEffect } from "react";
import { NOW_PLAYING } from "../../config";

export const useTheatreFetch = () => {
    const [playing, setPlaying] = useState ({ dataPlaying: [] });
    const [loadPlaying, setLoadPlaying] = useState(false);
    const [playingErrors, setPlayingErrors] = useState(false);

    const nowPlaying = async (playingNow) => {
        setPlayingErrors(false);
        setLoadPlaying(false);
        
        const loadMore = playingNow.search("page");
        try {
            const getPlaying = await (await fetch(playingNow)).json();
            setPlaying((previousPlaying) => ({
              ...previousPlaying,
              dataPlaying:
                loadMore !== -1
                  ? [...previousPlaying.dataPlaying, ...getPlaying.results]
                  : [...getPlaying.results.slice(0, 20)],
              currentPlaying: getPlaying.page,
              totalPlaying: getPlaying.total_pages,
            }));
            console.log(getPlaying);
          } catch (playingErrors) {
            setPlayingErrors(true);
          }
          setLoadPlaying(false);
        };
        useEffect(() => {
          nowPlaying(NOW_PLAYING);
        }, []);
      
    return [{ playing, loadPlaying, playingErrors }, nowPlaying];
};
