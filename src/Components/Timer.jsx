import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Timer.css'
import {
  decrementSeconds,
  setTimer,
  toggleTimer,
  resetTimer,
} from '../Store/TimerSlice';
import './Timer.css'; 

const Timer = () => {
  const dispatch = useDispatch();
  const { hours, minutes, seconds, isRunning } = useSelector((state) => state.timer);
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(decrementSeconds());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

  const handleSetTimer = () => {
    dispatch(setTimer({ hours: inputHours, minutes: inputMinutes, seconds: inputSeconds }));
  };

  return (
    <div className="timer-container">
      <h1 className="timer-display">
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </h1>
      <div className="timer-inputs">
        <input
          type="number"
          placeholder="Saat"
          value={inputHours}
          onChange={(e) => setInputHours(Number(e.target.value))}
          className="timer-input"
        />
        <input
          type="number"
          placeholder="Dəqiqə"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(Number(e.target.value))}
          className="timer-input"
        />
        <input
          type="number"
          placeholder="Saniyə"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(Number(e.target.value))}
          className="timer-input"
        />
        <button onClick={handleSetTimer} className="timer-button set-button">Taymeri Qur</button>
      </div>
      <div className="timer-controls">
        <button onClick={() => dispatch(toggleTimer())} className="timer-button toggle-button">
          {isRunning ? 'Dayandır' : 'Başla'}
        </button>
        <button onClick={() => dispatch(resetTimer())} className="timer-button reset-button">Sıfırla</button>
      </div>
    </div>
  );
};

export default Timer;