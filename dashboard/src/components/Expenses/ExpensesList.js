import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
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
  Button,FormControl,Select,MenuItem
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import { getInitials } from "../../utils/get-initials";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
export const ExpensesList = ({ data, ...rest }) => {
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
                <TableCell>Project</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Purchased From</TableCell>
                <TableCell>Employees</TableCell>
                <TableCell>Purchase Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover>
                <TableCell>1</TableCell>
                <TableCell>---</TableCell>
                <TableCell>Ut est ad molestiae.</TableCell>
                <TableCell>1,859.00$ </TableCell>
                <TableCell>Mock.</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>05-06-2021</TableCell>
                <TableCell>
                  <FormControl sx={{  width: "200px" }}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={"Pending"}
                      label="Add Product"
                      sx={{color:"brown"}}
                      onChange={() => {}}
                    >
                      <MenuItem  value={"Pending"}>Pending</MenuItem>
                      <MenuItem value={"Approved"}>Approved</MenuItem>
                      <MenuItem value={"Approved"}>Approved</MenuItem>
                    </Select>
                  </FormControl>
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
                    <IconButton sx={{ color: "#8B0000" }}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>1</TableCell>
                <TableCell>---</TableCell>
                <TableCell>Ut est ad molestiae.</TableCell>
                <TableCell>1,859.00$ </TableCell>
                <TableCell>Mock.</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>05-06-2021</TableCell>
                <TableCell>
                  <FormControl sx={{  width: "200px" }}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={"Approved"}
                      label="Add Product"
                      sx={{color:"green"}}
                      onChange={() => {}}
                    >
                      <MenuItem  value={"Pending"}>Pending</MenuItem>
                      <MenuItem value={"Approved"}>Approved</MenuItem>
                      <MenuItem value={"Approved"}>Approved</MenuItem>
                    </Select>
                  </FormControl>
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
                    <IconButton sx={{ color: "#8B0000" }}>
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

ExpensesList.propTypes = {
  data: PropTypes.array.isRequired,
};
