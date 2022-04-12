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

//set style to be use in Modal
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

export default function Activity() {
  //initialize empty activity
  const [activity, setActivity] = React.useState("");
  //drop down activities
  const [activities, setActivities] = React.useState([
    "Run",
    "Bicycle Ride",
    "Swim",
    "Walk",
    "Hike",
  ]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // will push a new activity user input to the activity
  function pushActivity() {
    if (activity !== "") {
      setActivities((oldArray) => [...oldArray, activity]);
      handleClose();
      //if there is no activity input, this will alert
    } else alert("activities field is empty");
  }

  return (
    <div className="container">
      <Header />

      <div className="form-container">
        <div className="form-inner-element">
          <div className="form-title">Activity Form</div>
          <form action="#">
            <div className="activity-details">
              <div className="input-box">
                <span className="details">Activity Type</span>
                <select>
                  <option disabled selected value>
                    -- select activity --
                  </option>
                  {activities.map((e) => (
                    <option value={e}>{e}</option>
                  ))}
                </select>
              </div>

              <div className="input-box">
                <input
                  type="button"
                  id="addButton"
                  value="Add New Activity"
                  onClickCapture={handleOpen}
                />
              </div>
              <div className="input-box">
                <span className="details">Description</span>
                <input
                  type="text"
                  placeholder="Enter the description"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Duration</span>
                <Box display="flex" justifyContent="space-between" gap="5px">
                  <input
                    type="text"
                    placeholder="hours"
                    required
                  />
                  <input
                    type="text"
                    placeholder="minutes"
                    required
                  />
                </Box>
              </div>
              <div className="input-box">
                <span className="details">Date</span>
                <input type="date" required />
              </div>
            </div>
            <div className="form-button">
              <input type="reset" value="RESET" />
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>

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
              New Activity
            </Typography>
            <br />
            <br />
            <TextField
              fullWidth
              value={activity}
              variant="outlined"
              id="outlined-basic"
              label="Activity Name"
              onChange={(e) => setActivity(e.target.value)}
            />
            <br />
            <br />
            <Button variant="outlined" onClick={pushActivity}>
              Add
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
