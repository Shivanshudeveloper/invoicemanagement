import { Box, Container, Typography, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { EmployeestimeList } from '../../../components/employeestimesheets/EmployeestimeList';
import { EmployeestimeToolbar } from '../../../components/employeestimesheets/EmployeestimeToolbar';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
const EmployeesData = [
    {
        date: '27-12-2021',
        day: 'Monday',
        clockIn: '10:58:00 AM',
        clockOut: '05:01:00 PM',
        totalHours: '6 hr 3 mins',
        status: 'Late In/Early Out'
    },
    {
        date: '28-12-2021',
        day: 'Tuesday',
        clockIn: '10:58:00 AM',
        clockOut: '05:01:00 PM',
        totalHours: '6 hr 3 mins',
        status: 'Late In/On Time'
    },
    {
        date: '29-12-2021',
        day: 'Wednesday',
        clockIn: '10:58:00 AM',
        clockOut: '05:01:00 PM',
        totalHours: '6 hr 3 mins',
        status: 'Late In/On Time'
    },
    {
        date: '30-12-2021',
        day: 'Thrusday',
        clockIn: '10:58:00 AM',
        clockOut: '05:01:00 PM',
        totalHours: '6 hr 3 mins',
        status: 'Late In/On Time'
    },
    {
        date: '31`-12-2021',
        day: 'Friday',
        clockIn: '10:58:00 AM',
        clockOut: '05:01:00 PM',
        totalHours: '6 hr 3 mins',
        status: 'Late In/On Time'
    }
];

const Employeestimesheets = () => {
    const [showManualEntry, setShowManualEntry] = useState(false);
    const [showWebClock, setShowWebClock] = useState(false);
    const changeShowManualEntry = (val) => {
        setShowManualEntry(val);
    };
    const changeShowWebClock = (val) => {
        setShowWebClock(val);
    };
    const [day, setDay] = useState('');
    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                {showManualEntry ? (
                    <Container maxWidth={false}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                m: -1
                            }}
                        >
                            <Typography sx={{ m: 1 }} variant="h4">
                                Manual Entry
                            </Typography>
                            <Button onClick={() => changeShowManualEntry(false)} variant="contained">
                                <ArrowBackIcon sx={{ mr: 2 }} /> return
                            </Button>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <Card sx={{ p: 2 }}>
                                <Typography sx={{ m: 1 }} variant="h6">
                                    Day
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Day</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={day}
                                        label="Day"
                                        onChange={(e) => {
                                            setDay(e.target.value);
                                        }}
                                    >
                                        <MenuItem value={'Monday'}>Monday</MenuItem>
                                        <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                                        <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                                        <MenuItem value={'Thrusday'}>Thrusday</MenuItem>
                                        <MenuItem value={'Friday'}>Friday</MenuItem>
                                    </Select>
                                </FormControl>
                                <Typography sx={{ m: 1 }} variant="h6">
                                    Date
                                </Typography>
                                <TextField type="date" />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box sx={{ width: '45%' }}>
                                        <Typography sx={{ m: 1 }} variant="h6">
                                            Clock In
                                        </Typography>
                                        <TextField sx={{ width: '100%' }} type="time" />
                                    </Box>
                                    <Box sx={{ width: '45%' }}>
                                        <Typography sx={{ m: 1 }} variant="h6">
                                            Clock Out
                                        </Typography>
                                        <TextField sx={{ width: '100%' }} type="time" />
                                    </Box>
                                </Box>
                                <Box sx={{ float: 'right', mt: 2 }}>
                                    <Button sx={{ mr: 2 }} variant="contained" color="secondary">
                                        <CheckCircleIcon sx={{ mr: 2 }} /> Save
                                    </Button>
                                    <Button onClick={() => changeShowManualEntry(false)} variant="outlined" color="error">
                                        <CancelIcon sx={{ mr: 2 }} /> Cancel
                                    </Button>
                                </Box>
                            </Card>
                        </Box>
                    </Container>
                ) : showWebClock ? (
                    <Container maxWidth={false}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                m: -1
                            }}
                        >
                            <Typography sx={{ m: 1 }} variant="h4">
                                Web Clock
                            </Typography>
                            <Button onClick={() => changeShowWebClock(false)} variant="contained">
                                <ArrowBackIcon sx={{ mr: 2 }} /> return
                            </Button>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <Card sx={{ p: 2 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography sx={{ m: 1, color: '#1E90FF' }} variant="h5">
                                        Work Day
                                    </Typography>
                                    <Typography>{new Date().toDateString()}</Typography>
                                    <Typography variant="h3">{new Date().toLocaleTimeString()}</Typography>
                                    <Typography sx={{ mt: 3 }} variant="h6">
                                        Enter Your ID Number
                                    </Typography>
                                    <TextField sx={{ width: '50%' }} label="Id" type="text" />
                                    <Box sx={{ mt: 5 }}>
                                        <Button sx={{ mr: 2 }} variant="contained">
                                            Clock IN
                                        </Button>
                                        <Button sx={{ backgroundColor: '#1E90FF', ml: 2 }} variant="contained">
                                            Clock OUT
                                        </Button>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    </Container>
                ) : (
                    <Container maxWidth={false}>
                        <EmployeestimeToolbar changeShowWebClock={changeShowWebClock} changeShowManualEntry={changeShowManualEntry} />
                        <Box sx={{ mt: 3 }}>
                            <EmployeestimeList EmployeesData={EmployeesData} />
                        </Box>
                    </Container>
                )}
            </Box>
        </>
    );
};

export default Employeestimesheets;
