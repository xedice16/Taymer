import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: false,
  laps: [], // Laplar üçün əlavə vəziyyət
};

const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    incrementSeconds: (state) => {
      state.seconds += 1;
      if (state.seconds >= 60) {
        state.seconds -= 60;
        state.minutes += 1;
      }
      if (state.minutes >= 60) {
        state.minutes -= 60;
        state.hours += 1;
      }
    },
    toggleStopwatch: (state) => {
      state.isRunning = !state.isRunning;
    },
    resetStopwatch: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
      state.isRunning = false;
      state.laps = []; // Lapları da sıfırla
    },
    addLap: (state) => {
      // Mövcud vaxtı lap kimi əlavə et
      state.laps.push({
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds,
      });
    },
  },
});

export const {
  incrementSeconds,
  toggleStopwatch,
  resetStopwatch,
  addLap,
} = stopwatchSlice.actions;

export default stopwatchSlice.reducer;

