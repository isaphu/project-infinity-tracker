import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Header from "../../component/header";
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div class="container">
      <Header />

      <div class="main-content">
        <main>
          <div class="cards">
            <div class="card-single">
              <div>
                <span>Today's activities</span>
                <h1>5</h1>
              </div>
              <div>
                <span class="las la-running"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <span>Types of activities recorded</span>
                <h1>10</h1>
              </div>
              <div>
                <span class="las la-tasks"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <span>Total duration recorded</span>
                <h1>10 hours 22 mins</h1>
              </div>
              <div>
                <span class="las la-stopwatch"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <span>Total activities recorded</span>
                <h1>56</h1>
              </div>
              <div>
                <span class="las la-bookmark"></span>
              </div>
            </div>
          </div>

          <div class="recent-grid">
            <div class="activitie-table">
              <div class="card">
                <div class="card-header">
                  <h2>Recent activities</h2>

                  <Button variant="outlined">
                    See all <span class="las la-arrow-right"></span>
                  </Button>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
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
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>15 March 2022</td>
                          <td>Running</td>
                          <td>Running with friends at chatujak park</td>
                          <td>30 mins</td>
                          <td>
                            <Button variant="outlined" onClick={handleOpen}>
                              More Info.
                            </Button>
                          </td>
                        </tr>
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
            <div className="input-box">
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

      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>
                <a href="./create-activities">
                  <img
                    src={require("../../media/icons/icons8-infinity-90.png")}
                    width="40px"
                  />
                </a>
              </h4>
              <ul>
                <li>
                  <a href="./create-activities">CREATE ACTIVITY</a>
                </li>
                <li>
                  <a href="./dashboard">DASHBOARD</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Contact Info</h4>
              <p>
                <img
                  src={require("../../media/icons/icons8-location-50.png")}
                  width="15px"
                />
                4765 Alfred Drive
                <br />
                New York NY 10011
              </p>
              <p>
                <img
                  src={require("../../media/icons/icons8-phone-50.png")}
                  width="15px"
                />
                909-690-8838
              </p>
              <p>
                <img
                  src={require("../../media/icons/icons8-email-64.png")}
                  width="15px"
                />
                contact@it.com
              </p>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
