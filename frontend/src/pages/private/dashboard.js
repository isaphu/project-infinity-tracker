import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Header from "../../component/private-page-header";
import Footer from "../../component/private-page-footer";
//set style for Modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [allActivities, setAllActivities] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/v1/createActivities")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAllActivities(data.data);
      });
  }, []);

  return (
    <div className="container">
      <Header />

      <div className="main-content">
        <main>
          <div className="cards">
            <div className="card-single">
              <div>
                <span>Today's activities</span>
                <h1>5</h1>
              </div>
              <div>
                <span className="las la-running"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <span>Types of activities recorded</span>
                <h1>10</h1>
              </div>
              <div>
                <span className="las la-tasks"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <span>Total duration recorded</span>
                <h1>10 hours 22 mins</h1>
              </div>
              <div>
                <span className="las la-stopwatch"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <span>Total activities recorded</span>
                <h1>56</h1>
              </div>
              <div>
                <span className="las la-bookmark"></span>
              </div>
            </div>
          </div>

          <div className="recent-grid">
            <div className="activitie-table">
              <div className="card">
                <div className="card-header">
                  <h2>Recent activities</h2>

                  <Button variant="outlined">
                    Next page <span className="las la-arrow-right"></span>
                  </Button>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Date</td>
                          <td>Activity types</td>
                          <td>Description</td>
                          <td>Duration</td>
                        </tr>
                      </thead>
                      <tbody>
                        {allActivities.map((cty) => {
                          return (
                            <tr>
                              <td>{cty.date}</td>
                              <td>{cty.activityType}</td>
                              <td>{cty.description}</td>
                              <td>{(cty.duration / 60).toFixed(2)} hours</td>
                              <td>
                                <Button variant="outlined" onClick={handleOpen}>
                                  More Info.
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Update Activity
            </Typography>
            <br />
            <br />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Date"
              variant="outlined"
            />
            <br />
            <br />
            <div classNameName="input-box">
              <select>
                <option disabled selected value>
                  -- select activity --
                </option>
                <option value="Run">Run</option>
                <option value="Bicycle Ride">Bicycle Ride</option>
                <option value="Swim">Swim</option>
                <option value="Walk">Walk</option>
                <option value="Hike">Hike</option>
              </select>
            </div>
            <br />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Duration"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Location"
              variant="outlined"
            />
            <br />
            <br />
            <Box display="flex" justifyContent="space-between">
              <Button variant="outlined" onClick={handleClose}>
                Delete
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Update
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      <Footer></Footer>
    </div>
  );
}
