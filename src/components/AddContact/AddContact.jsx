import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createCaller } from "../../actions/callers";

export default function AddContact({ setAddContact }) {
  const dispatch = useDispatch();

  const [callerRoAdd, setCallerToAdd] = useState({
    caller: "",
    date: "",
    phoneNumber: "",
  });

  return (
    <Paper sx={{ padding: "10px", width: "280px", marginBottom: "10px" }}>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <TextField
          onChange={e =>
            setCallerToAdd({ ...callerRoAdd, caller: e.target.value })
          }
          label="Caller Name"
          value={callerRoAdd?.caller}
        />
        <TextField
          onChange={e =>
            setCallerToAdd({
              ...callerRoAdd,
              phoneNumber: e.target.value,
            })
          }
          label="Caller Phone number"
          value={callerRoAdd?.phoneNumber}
        />
        <TextField
          onChange={e =>
            setCallerToAdd({ ...callerRoAdd, date: e.target.value })
          }
          value={callerRoAdd?.date}
          type="date"
        />
      </Box>
      <Button
        sx={{ marginRight: "10px" }}
        onClick={() => setAddContact(false)}
        variant="outlined"
        color="error"
      >
        Cancel
      </Button>
      <Button
        onClick={() => dispatch(createCaller(callerRoAdd))}
        variant="contained"
        color="success"
      >
        Add
      </Button>
    </Paper>
  );
}

AddContact.propTypes = {
  setAddContact: PropTypes.func,
};
