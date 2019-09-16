
import React from "react";
import { Card } from 'semantic-ui-react';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          <p className="location">{type} - {dimension}</p>
          <p className="residents">{residents} residents</p>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}