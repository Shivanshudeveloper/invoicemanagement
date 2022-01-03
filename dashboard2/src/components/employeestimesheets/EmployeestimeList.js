import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    Tooltip,
    IconButton,
    TextField,
    Button
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { getInitials } from '../../utils/get-initials';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export const EmployeestimeList = ({ EmployeesData, ...rest }) => {
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
            newSelectedCustomerIds = EmployeesData.map((customer) => customer.id);
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCustomerIds.indexOf(id);
        let newSelectedCustomerIds = [];

        if (selectedIndex === -1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
        } else if (selectedIndex === 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, selectedIndex),
                selectedCustomerIds.slice(selectedIndex + 1)
            );
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Card {...rest}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
                <TextField size="small" id="outlined-basic" label="Start Date" variant="outlined" />
                <TextField size="small" id="outlined-basic" label="End Date" variant="outlined" />
                <Button variant="contained" color="secondary">
                    <FilterAltIcon fontSize="small" sx={{ mr: 2 }} /> Filter
                </Button>
                <Button variant="contained">
                    <ExitToAppIcon sx={{ mr: 2 }} /> Export to CSV
                </Button>
            </Box>
            <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>DATE</TableCell>
                                <TableCell>DAY</TableCell>
                                <TableCell>CLOCK IN</TableCell>
                                <TableCell>CLOCK OUT</TableCell>
                                <TableCell>TOTAL HOURS</TableCell>
                                <TableCell>STATUS (IN/OUT)</TableCell>
                                <TableCell>STATUS (Confirm)</TableCell>
                                <TableCell>ACTIONS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {EmployeesData.slice(0, limit).map((emp, id) => (
                                <TableRow hover key={id} selected={selectedCustomerIds.indexOf(id) !== -1}>
                                    <TableCell>{emp.date}</TableCell>
                                    <TableCell>{emp.day}</TableCell>
                                    <TableCell>{emp.clockIn}</TableCell>
                                    <TableCell>{emp.clockOut}</TableCell>
                                    <TableCell>{emp.totalHours}</TableCell>
                                    <TableCell>{emp.status}</TableCell>
                                    <TableCell>Pending</TableCell>
                                    <TableCell>
                                        <Tooltip title="Delete">
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={EmployeesData.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

EmployeestimeList.propTypes = {
    EmployeesData: PropTypes.array.isRequired
};
