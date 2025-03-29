import React from 'react'; // Ensure React is imported
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage'; // Importing the new TaskListPage component

import Header from './components/Header'; // Updated import path
import JobLandingPage from './pages/JobLandingPage';
import JobDetailPage from './pages/JobDetailPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<JobLandingPage />} />
          <Route path="/tasks" element={<TaskListPage />} /> // New route for TaskListPage

          <Route path="/job/:jobId" element={<JobDetailPage />} />
        </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
