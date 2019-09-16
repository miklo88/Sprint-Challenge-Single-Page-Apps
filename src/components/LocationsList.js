import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {

    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                console.log("Location Data", res)
                setLocation(res.data.results)
            })
            .catch(err => {
                console.log("Location Error", err)
            })
    }, [])

    return (
        <div className="grid-view">
            {Array.from(location).map(loc => {
                return <LocationCard
                    key={loc.id}
                    name={loc.name}
                    type={loc.type}
                    dimension={loc.dimension}
                    residents={loc.residents.length}
                />
            })}
        </div>
    )
}