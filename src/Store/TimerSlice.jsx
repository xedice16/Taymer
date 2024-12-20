import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decrementSeconds: (state) => {
      if (state.seconds > 0) {
        state.seconds -= 1;
      } else if (state.minutes > 0 || state.hours > 0) {
        state.seconds = 59;
        if (state.minutes > 0) {
          state.minutes -= 1;
        } else if (state.hours > 0) {
          state.minutes = 59;
          state.hours -= 1;
        }
      }
    },
    setTimer: (state, action) => {
      const { hours, minutes, seconds } = action.payload;
      state.hours = hours;
      state.minutes = minutes;
      state.seconds = seconds;
    },
    toggleTimer: (state) => {
      state.isRunning = !state.isRunning;
    },
    resetTimer: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
      state.isRunning = false;
    },
  },
});

export const {
  decrementSeconds,
  setTimer,
  toggleTimer,
  resetTimer,
} = timerSlice.actions;

export default timerSlice.reducer;