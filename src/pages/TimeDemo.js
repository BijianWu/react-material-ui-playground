import Typography from '@mui/material/Typography';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import moment from 'moment';
import React from 'react';
import { FormControl } from 'react-bootstrap';
export default function TimeDemo() {
    let [date, setDate] = React.useState(dayjs(new Date()));
    const [time, setTime] = React.useState(dayjs(moment().startOf('day')));

    console.log(date.toDate());
    console.log("date" + date.date() + " month is " + date.month() + " year is " + date.year());
    console.log("hour is " + moment(time.toDate()).hours() + " minutes " + moment(time.toDate()).minutes());
    console.log("hour is " + time.hour() + " minutes " + time.minute());

    console.log("full object is " + date.hour(time.hour()).minute(time.minute()).toDate());
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>

            <DemoContainer  components={['DatePicker', 'TimePicker']}>
            <FormControl required sx={{m:3}}>
                
            </FormControl>
            {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
            <DatePicker
            label="Controlled date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            format='YYYY-MM-DD'
            slotProps={{
                textField: {
                    required: true
                }
            }}
            />

            <TimePicker
            ampm={false}
            label="Controlled time"
            value={time}
            onChange={(newValue) => setTime(newValue)}
            format='HH:mm'
            slotProps={{
                textField: {
                    required: true
                }
            }}
            />
            </DemoContainer>
        </LocalizationProvider>
        </>
    )
}