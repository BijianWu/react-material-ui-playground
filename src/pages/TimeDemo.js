import Typography from '@mui/material/Typography';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import moment from 'moment';
import React from 'react';
export default function TimeDemo() {
    const [date, setDate] = React.useState(dayjs('2022-04-17'));
    const [time, setTime] = React.useState(dayjs(moment().startOf('day')));
    // console.log(date);
    // console.log(time.toDate());
    console.log("hour is " + moment(time.toDate()).hours() + " minutes " + moment(time.toDate()).minutes());

    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'TimePicker']}>
            {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
            <DatePicker
            label="Controlled date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            />

            <TimePicker
            ampm={false}
            label="Controlled time"
            value={time}
            onChange={(newValue) => setTime(newValue)}
            />
            </DemoContainer>
        </LocalizationProvider>
        </>
    )
}