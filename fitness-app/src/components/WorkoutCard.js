import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

const WorkoutCard = ({ exercise, duration, date, notes }) => {
  return (
    <Card style={{ width: '18rem' }}>

      {/* I have to make this image works and loads on the cards. The next line of code is the one for image*/}

      {/* <Card.Img variant="top" src="/workout.png" alt="Exercise Image" /> */}
      <Card.Body>
        <Card.Title>{exercise}</Card.Title>
        <Card.Text>
          <strong>EXERCISE:</strong> {exercise} <br />
          <strong>DURATION:</strong> {duration} minutes<br />
          <strong>DATE:</strong> {date}<br />
          <strong>NOTES:</strong> {notes}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="warning">EDIT</Button>
          <Button variant="danger">DELETE</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const WorkoutCardList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/workouts')
      .then((response) => response.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error('Error fetching workout data:', error));
  }, []);

  return (
    <div className="workout-card-container">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} {...workout} />
      ))}
    </div>
  );
};

export default WorkoutCardList;
