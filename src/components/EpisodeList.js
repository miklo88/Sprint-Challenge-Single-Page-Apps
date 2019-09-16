import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';


export default function EpisodeList() {
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
        .then(res => {
            console.log('Episode Data', res)
            setEpisode(res.data.results)
        })
        .catch(err => {
            console.log('Err', err)
        })
    }, []);
    
    return (
        <div className="character-list grid-view">
           {episode.map((ep, index) => {
               return <EpisodeCard 
                    name = {ep.name}
                    air_date = {ep.air_date}
                    episode = {ep.episode}
                    characters = {ep.characters.length}
               />
           })} 
        </div>
    )
}