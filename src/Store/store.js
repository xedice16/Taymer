import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './TimerSlice';
import stopwatchReducer from './StopwatchSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    stopwatch: stopwatchReducer,
  },
});

export default store;

