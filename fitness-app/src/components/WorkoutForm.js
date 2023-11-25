// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';

// const WorkoutForm = () => {
//   const [formData, setFormData] = useState({
//     exercise: '',
//     duration: '',
//     date: '',
//     notes: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.exercise || !formData.duration || !formData.date) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3001/workouts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setFormData({
//           exercise: '',
//           duration: '',
//           date: '',
//           notes: '',
//         });
//         alert('Workout data submitted successfully!');
//       } else {
//         alert('Failed to submit workout data. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting workout data:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="workout-form-container">
//       <h3>Workout Form</h3>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formExercise">
//           <Form.Label>Exercise</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter exercise"
//             name="exercise"
//             value={formData.exercise}
//             onChange={handleInputChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formDuration">
//           <Form.Label>Duration (minutes)</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter duration"
//             name="duration"
//             value={formData.duration}
//             onChange={handleInputChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formDate">
//           <Form.Label>Date</Form.Label>
//           <Form.Control
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleInputChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formNotes">
//           <Form.Label>Notes</Form.Label>
//           <Form.Control
//             as="textarea"
//             placeholder="Enter notes"
//             name="notes"
//             value={formData.notes}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default WorkoutForm;



import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const WorkoutForm = () => {
  const [formData, setFormData] = useState({
    exercise: '',
    duration: '',
    date: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.exercise || !formData.duration || !formData.date) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          exercise: '',
          duration: '',
          date: '',
          notes: '',
        });
        alert('Workout data submitted successfully!');
      } else {
        alert('Failed to submit workout data. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting workout data:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="workout-form-container">
      <h3>Workout Form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formExercise">
          <Form.Label>Exercise</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter exercise"
            name="exercise"
            value={formData.exercise}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDuration">
          <Form.Label>Duration (minutes)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default WorkoutForm;
