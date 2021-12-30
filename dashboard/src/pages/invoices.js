import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  section,
  DialogActions,
} from "@mui/material";

import { DashboardLayout } from "../components/dashboard-layout";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { InvoicesToolbar } from "src/components/invoices/InvoicesToolbar";
import { InvoicesList } from "src/components/invoices/InvoicesList";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const InvoicesData = [
  {
    clientName: "Ekaterina Tankova",
    projectName: "abc",
    date: "12-10-21",
  },
];
const clientsName = [
  "Ekaterina Tankova",
  "Cao Yu",
  "Alexa Richardson",
  "Anje Keizer",
  "Adam Denisov",
];
const Invoices = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [day, setDay] = useState("");
  const [files, setFiles] = useState(null);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const fileSubmit = () => {};
  useEffect(() => {
    setFiles(
      acceptedFiles.map((file) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ))
    );
  }, [acceptedFiles]);

  return (
    <>
      <Head>
        <title>Invoices | Material Kit</title>
      </Head>
      <Dialog
        open={open}
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Upload Invoice</DialogTitle>
        <DialogContent>
          <Container>
            <Typography sx={{ mt: 2, mb: 2 }} variant="h6">
              Client Name
            </Typography>
            <FormControl sx={{ width: "50%" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Choose Client"}
                label="Client Name"
                onChange={() => {}}
              >
                <MenuItem value={"Choose Client"}>Choose Client</MenuItem>
                {clientsName.map((name, id) => (
                  <MenuItem key={id} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography sx={{ mt: 3, mb: 1 }} variant="h6">
              Project Name
            </Typography>
            <FormControl sx={{ width: "50%" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Choose Project"}
                label="Project Name"
                onChange={() => {}}
              >
                <MenuItem value={"Choose Project"}>Choose Project</MenuItem>
                {clientsName.map((name, id) => (
                  <MenuItem key={id} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography sx={{ mt: 3, mb: 1 }} variant="h6">
              Date
            </Typography>
            <TextField sx={{ width: "50%" }} type="date" />
            <section
              style={{
                backgroundColor: "#F0F8FF",
                border: "1px solid white",
                borderRadius: "10px",
                padding: "10px",
                cursor: "pointer",
                marginTop: "20px",
                border: "1px solid black",
              }}
              className="dropzone"
              {...getRootProps()}
            >
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "space-evenly",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <input {...getInputProps()} />
                <h2>Drag and Drop files here</h2> <h2>or</h2>
                <Button variant="outlined"> Browse Files</Button>
                <CloudUploadIcon sx={{ fontSize: "2.2em" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <ul>{files}</ul>
              </Box>
            </section>

            <TextField
              id="outlined-multiline-static"
              fullWidth
              label="Description"
              multiline
              rows={6}
              sx={{ mt: 2 }}
            />
          </Container>
        </DialogContent>
        <DialogActions>
          {loading ? <CircularProgress /> : null}
          <Button disabled={loading} size="large" onClick={handleClose}>
            Cancel
          </Button>
          <Button disabled={loading} size="large" onClick={fileSubmit} autoFocus>
            Upload
          </Button>
        </DialogActions>
      </Dialog>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <InvoicesToolbar handleOpen={handleOpen} />
          <Box sx={{ mt: 3 }}>
            <InvoicesList InvoicesData={InvoicesData} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
Invoices.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Invoices;
