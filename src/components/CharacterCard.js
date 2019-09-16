import React from "react";
import {Card, Icon} from 'semantic-ui-react';


export default function CharacterCard(props) {
  return (
    <Card>
      <Card.Content>
        <img alt="charcter headshots" wrapped ui={false}
        src={props.image} 
        />
        
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          <p>{props.species} {props.status}</p>
          <p>Location: {props.location}</p>
          <p>Origin: {props.origin}</p>
        </Card.Description>
      </Card.Content>
      {/* user content. */}
      <Card.Content>
        <p><Icon name='user' /> Episodes</p>
      </Card.Content>
    </Card>
  );
}