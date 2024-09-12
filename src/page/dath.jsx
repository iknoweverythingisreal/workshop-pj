import React, { useState } from 'react';
import '../App.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const today = new Date();

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const isPastDate = (day) => {
    const date = new Date(selectedYear, selectedMonth - 1, day);
    return date < today;
  };

  const renderCalendarDays = () => {
    const totalDays = daysInMonth(selectedMonth, selectedYear);
    const days = [];

    for (let i = 1; i <= totalDays; i++) {
      if (isPastDate(i)) {
        days.push(
          <div key={i} className="calendar-day disabled">
            {i}
          </div>
        );
      } else {
        days.push(
          <div
            key={i}
            className={`calendar-day ${selectedDate === i ? 'selected' : ''}`}
            onClick={() => setSelectedDate(i)}
          >
            {i}
          </div>
        );
      }
    }
    return days;
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
    setSelectedDate(null); 
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
    setSelectedDate(null); 
  };

  return (
    <div className="calendar-container">
      <h2>Select Date and Month</h2>
      <div className="calendar">
        <div className="month-year-selector">
          <select value={selectedMonth} onChange={handleMonthChange}>
            {Array.from({ length: 12 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {new Date(0, index).toLocaleString('th-TH', { month: 'long' })}
              </option>
            ))}
          </select>
          <select value={selectedYear} onChange={handleYearChange}>
            {Array.from({ length: 5 }, (_, index) => (
              <option key={index} value={today.getFullYear() + index}>
                {today.getFullYear() + index + 543} {/* Convert to Buddhist Year */}
              </option>
            ))}
          </select>
        </div>
        <div className="calendar-grid">
          <div className="calendar-header">Mon</div>
          <div className="calendar-header">Tus</div>
          <div className="calendar-header">Wed</div>
          <div className="calendar-header">Thu</div>
          <div className="calendar-header">Fri</div>
          <div className="calendar-header">Sat</div>
          <div className="calendar-header">Sun</div>
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
