import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Stopwatch.css'
import {
  incrementSeconds,
  toggleStopwatch,
  resetStopwatch,
  addLap,
} from '../Store/StopwatchSlice';

const Stopwatch = () => {
  const dispatch = useDispatch();
  const { hours, minutes, seconds, isRunning, laps } = useSelector((state) => state.stopwatch);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(incrementSeconds());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

  return (
    <div className="stopwatch-container">
      <h1>
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </h1>
      <div className="button-container">
        <button onClick={() => dispatch(toggleStopwatch())}>
          {isRunning ? 'Dayandır' : 'Başla'}
        </button>
        <button onClick={() => dispatch(resetStopwatch())}>Sıfırla</button>
        <button onClick={() => dispatch(addLap())} disabled={!isRunning}>
          Lap
        </button>
      </div>
      <div className="laps-container">
        <h2>Laplar:</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>
              {String(lap.hours).padStart(2, '0')}:{String(lap.minutes).padStart(2, '0')}:
              {String(lap.seconds).padStart(2, '0')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;








