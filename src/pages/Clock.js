import React, {  useEffect, useRef } from 'react';

function Clock() {
  // State for dark mode (default from localStorage)
  

  // Refs for clock hands
  const hourHandRef = useRef(null);
  const minuteHandRef = useRef(null);
  const secondHandRef = useRef(null);
  

 
  

  // Update clock hands every second
  const updateTime = () => {
    const date = new Date();
    const secToDeg = (date.getSeconds() / 60) * 360;
    const minToDeg = (date.getMinutes() / 60) * 360;
    const hrToDeg = (date.getHours() / 12) * 360;

    if (secondHandRef.current) {
      secondHandRef.current.style.transform = `rotate(${secToDeg}deg)`;
    }
    if (minuteHandRef.current) {
      minuteHandRef.current.style.transform = `rotate(${minToDeg}deg)`;
    }
    if (hourHandRef.current) {
      hourHandRef.current.style.transform = `rotate(${hrToDeg}deg)`;
    }
  };

  // Set interval for updating clock
  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Update the time immediately on page load
  useEffect(() => {
    updateTime();
  }, []);

  
  

  return (
    <div className={`container `}>
      <div className="clock">
        <label style={{ '--i': 1 , display: 'none'}}><span>1</span></label>
        <label style={{ '--i': 2 , display: 'none'}}><span>2</span></label>
        <label style={{ '--i': 3 }}><span>3</span></label>
        <label style={{ '--i': 4, display: 'none'}}><span>4</span></label>
        <label style={{ '--i': 5 , display: 'none' }}><span>5</span></label>
        <label style={{ '--i': 6 }}><span>6</span></label>
        <label style={{ '--i': 7, display: 'none' }}><span>7</span></label>
        <label style={{ '--i': 8 , display: 'none'}}><span>8</span></label>
        <label style={{ '--i': 9 }}><span>9</span></label>
        <label style={{ '--i': 10, display: 'none' }}><span>10</span></label>
        <label style={{ '--i': 11, display: 'none' }}><span>11</span></label>
        <label style={{ '--i': 12 }}><span>12</span></label>
        <div className="indicator">
          <span className="hand hour" ref={hourHandRef}></span>
          <span className="hand minute" ref={minuteHandRef}></span>
          <span className="hand second" ref={secondHandRef}></span>
        </div>
      </div>
     
    </div>
  );
}

export default Clock;