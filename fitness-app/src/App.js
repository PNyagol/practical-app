import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import WorkoutForm from './components/WorkoutForm';
import Contact from './components/Contact';
import WorkoutCardList from './components/WorkoutCard';

function App() {

 
  return (
    <>
    {/* the NavBar goes in here. I will implement it later */}
    <header>
      <NavBar />
    </header>


    {/* the main page content comes here. I wimplement that later  */}
    <main>
      <WorkoutForm />
      <br />
      <h3>Workouts</h3>
      <WorkoutCardList />
      <br />
      <h3>Get in touch with us:</h3>
      <Contact />
    </main>


    {/* I will put our footer here and style it to look apperaling */}
    <footer>
    
      <p>&copy; 2023 Fitness App <br />Developed by Joses, Peter, Justin, Alvin, and Maureen for Phase-2-Project.</p>
      <p>Contact Us || Email - <a href="mailto:info@fitnessapp.com">info@fitnessapp.com</a></p>
      <p>Follow us on social media:</p>
      <ul>
        <li>Twitter: <a href="https://twitter.com/fitnessapp" target="_blank" rel="noopener noreferrer">@fitnessapp</a></li>
        <li>Facebook: <a href="https://www.facebook.com/fitnessapp" target="_blank" rel="noopener noreferrer">@fitnessapp</a></li>
        <li>Instagram: <a href="https://www.instagram.com/fitnessapp" target="_blank" rel="noopener noreferrer">@fitnessapp</a></li>
      </ul>
    
    </footer>
    </>
  );
}

export default App;
