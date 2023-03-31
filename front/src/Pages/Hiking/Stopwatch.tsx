import { useState, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handleStartStop = () => {
    if (!isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = window.setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    } else {
      window.clearInterval(intervalRef.current!);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    window.clearInterval(intervalRef.current!);
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatElapsedTime = (time: number) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <div>{formatElapsedTime(elapsedTime)}</div>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
