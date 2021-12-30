import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export const EmployeestimeToolbar = ({changeShowManualEntry,changeShowWebClock}) => (
  <Box>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Attendance
      </Typography>
      <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-evenly" }}>
        <Button
   
          color="primary"
          variant="outlined"
          onClick={()=>changeShowWebClock(true)}
        >
        <AccessTimeIcon sx={{mr:1}} /> Web Clock
        </Button>
        <Button
             sx={{ml:2}}
          color="primary"
          variant="outlined"
          onClick={()=>changeShowManualEntry(true)}
        >
          <AddCircleIcon sx={{mr:1}}/> Manual Entry
        </Button>
      </Box>
    </Box>
    {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box> */}
  </Box>
);

EmployeestimeToolbar.propTypes = {
  changeShowManualEntry: PropTypes.func
};
