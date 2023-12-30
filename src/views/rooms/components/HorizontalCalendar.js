import React, { useState } from 'react';
import { Datepicker } from '@meinefinsternis/react-horizontal-date-picker';
import { enUS } from 'date-fns/locale';

const HorizontalCalendar = () => {
  const [date, setDate] = useState({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const handleChange = (d) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  return (
    <div className="calendar">
      <Datepicker
        onChange={handleChange}
        locale={enUS}
        startValue={date.startValue}
        endValue={date.endValue}
      />
    </div>
  );
};

export default HorizontalCalendar;
