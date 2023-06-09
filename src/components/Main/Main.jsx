import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SelectedCaller from "../Callers/SelectedCaller";
import { useSelector } from "react-redux";
import AddContact from "../AddContact/AddContact";

export default function Main() {
  const [selectedCall, setSelectedCall] = useState();
  const [eddContact, setAddContact] = useState(false);

  const callers = useSelector(state => state.callers);

  const handleChange = e => {
    setSelectedCall(e.target.value);
  };

  useEffect(() => {
    return () => {};
  }, [callers]);

  return (
    <>
      {!eddContact ? (
        <Paper sx={{ padding: "10px", width: "280px", marginBottom: "10px" }}>
          <Button
            onClick={() => setAddContact(prev => !prev)}
            variant="contained"
          >
            Add Contact
          </Button>
        </Paper>
      ) : (
        <AddContact setAddContact={setAddContact} />
      )}

      <Paper sx={{ padding: "10px", width: "280px", marginBottom: "10px" }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose a contact
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCall?.caller || ""}
              label="Choose a contact"
              onChange={handleChange}
            >
              {callers?.map(caller => {
                return (
                  <MenuItem key={caller._id} value={caller}>
                    <span style={{ marginLeft: "10px" }}>{caller.caller}</span>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Paper>
      <Paper>
        {selectedCall && (
          <SelectedCaller
            caller={selectedCall}
            setSelectedCall={setSelectedCall}
          />
        )}
      </Paper>
    </>
  );
}

Main.propTypes = {
  callers: PropTypes.array,
};
