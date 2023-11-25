// import React, { useState, useEffect } from 'react';
// import WorkoutCard from './WorkoutCard';

// const WorkoutCardList = () => {
//   const [workouts, setWorkouts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/workouts');
//         const data = await response.json();
//         setWorkouts(data);
//       } catch (error) {
//         console.error('Error fetching workout data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="workout-card-container">
//       {workouts.map((workout) => (
//         <WorkoutCard key={workout.id} {...workout} />
//       ))}
//     </div>
//   );
// };

// export default WorkoutCardList;
