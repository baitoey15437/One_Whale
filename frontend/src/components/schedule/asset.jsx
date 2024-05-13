import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function CalendarTable() {
    const [value, setValue] = React.useState(dayjs('2024-05-07'));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateCalendar', 'DateCalendar']}>
            <DemoItem>
              <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      );

}

export default CalendarTable;