import { Box, TextField } from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [callerRoAdd, setCallerToAdd] = useState({
    caller: "",
    date: "",
    phoneNumber: "",
  });

  return (
    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
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
            phoneNumber: e.target.valu,
          })
        }
        label="Caller Phone number"
        value={callerRoAdd?.phoneNumber}
      />
      <TextField
        onChange={e => setCallerToAdd({ ...callerRoAdd, date: e.target.value })}
        label="Call Date"
        value={callerRoAdd?.date}
      />
    </Box>
  );
}
