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
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
export const EstimatesList = ({ data, ...rest }) => {
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Card {...rest}>
            <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>SI. NO.</TableCell>
                                <TableCell>Estimate</TableCell>
                                <TableCell>Client</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>valid till</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow hover>
                                <TableCell>1</TableCell>
                                <TableCell>000</TableCell>
                                <TableCell>May Gislason Sr.</TableCell>
                                <TableCell>4,100.00$</TableCell>
                                <TableCell>08-12-2017</TableCell>
                                <TableCell>
                                    <div
                                        style={{
                                            backgroundColor: 'lightgreen',
                                            border: '1ps solid grey',
                                            borderRadius: '50px',
                                            textAlign: 'center',
                                            width: '50%'
                                        }}
                                    >
                                        ACCEPTED
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Tooltip title="Edit">
                                        <IconButton color="secondary">
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="View">
                                        <IconButton>
                                            <VisibilityIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton sx={{ color: '#8B0000' }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>

                            <TableRow hover>
                                <TableCell>1</TableCell>
                                <TableCell>000</TableCell>
                                <TableCell>May Gislason Sr.</TableCell>
                                <TableCell>4,100.00$</TableCell>
                                <TableCell>08-12-2017</TableCell>
                                <TableCell>
                                    <div
                                        style={{
                                            backgroundColor: 'orange',
                                            border: '1ps solid grey',
                                            borderRadius: '50px',
                                            textAlign: 'center',
                                            width: '50%'
                                        }}
                                    >
                                        WAITING
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Tooltip title="Edit">
                                        <IconButton color="secondary">
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="View">
                                        <IconButton>
                                            <VisibilityIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton sx={{ color: '#8B0000' }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={data.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

EstimatesList.propTypes = {
    data: PropTypes.array.isRequired
};
