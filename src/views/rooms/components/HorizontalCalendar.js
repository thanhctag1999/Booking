import React from 'react';
import DatePicker from 'react-horizontal-datepicker';

export default function HorizontalCalendar() {
  const selectedDay = (val) => {
    console.log(val);
  };

  return (
    <div>
      <DatePicker getSelectedDay={selectedDay} labelFormat={'MMMM'} color={'#5D87FF'} />
    </div>
  );
}
