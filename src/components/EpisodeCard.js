import React from 'react';
import {Card} from 'semantic-ui-react';


export default function EpisodeCard(props) {
    return (
        <div>
            <Card> 
                <Card.Content>
                <Card.Header>Episode Title: {props.name}</Card.Header>
                <Card.Description>
                    <p>Air Date: {props.air_date} </p>
                    <p>Episode: {props.episode}</p>
                    <p># of Characters: {props.characters}</p>
                </Card.Description>
                </Card.Content>
            </Card> 
        </div>
    )
}