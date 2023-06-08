import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteCaller, updateCaller } from "../../actions/callers";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedCaller({ caller, setSelectedCall }) {
  const [changing, setChanging] = useState(false);

  const [callerToChange, setCallerToChange] = useState({
    caller: caller?.caller,
    date: caller?.date,
    phoneNumber: caller?.phoneNumber,
  });

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteCaller(id));
    setSelectedCall("");
  };

  useEffect(() => {
    setCallerToChange({
      caller: caller?.caller,
      date: caller?.date,
      phoneNumber: caller?.phoneNumber,
    });
  }, [caller]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {!changing ? (
          <>
            <Typography variant="h5" component="div">
              {caller?.caller}
            </Typography>
            <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
              {caller?.phoneNumber}
            </Typography>
            <Typography variant="body2">{`Date: ${caller?.date}`}</Typography>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <TextField
              onChange={e =>
                setCallerToChange({ ...callerToChange, caller: e.target.value })
              }
              label="Caller Name"
              value={callerToChange?.caller}
            />
            <TextField
              onChange={e =>
                setCallerToChange({
                  ...callerToChange,
                  phoneNumber: e.target.valu,
                })
              }
              label="Caller Phone number"
              value={callerToChange?.phoneNumber}
            />
            <TextField
              onChange={e =>
                setCallerToChange({ ...callerToChange, date: e.target.value })
              }
              label="Call Date"
              value={callerToChange?.date}
            />
          </Box>
        )}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        {!changing ? (
          <Button
            onClick={() => setChanging(prev => !prev)}
            variant="outlined"
            size="small"
          >
            Change
          </Button>
        ) : (
          <>
            <Button
              onClick={() => setChanging(false)}
              variant="outlined"
              color="error"
              size="small"
            >
              Cancel
            </Button>
            <Button
              onClick={() => dispatch(updateCaller(caller._id, callerToChange))}
              variant="contained"
              color="success"
              size="small"
            >
              Update
            </Button>
          </>
        )}

        <Button
          onClick={() => handleDelete(caller._id)}
          variant="contained"
          color="error"
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

SelectedCaller.propTypes = {
  caller: PropTypes.object,
  setSelectedCall: PropTypes.func,
};
