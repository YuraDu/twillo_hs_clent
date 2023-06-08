import { MenuItem } from "@mui/material";
import PropTypes from "prop-types";

export default function Caller({ caller }) {
  return (
    <MenuItem key={caller._id} value={caller}>
      {/* <div
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "gray",
                      borderRadius: "50%",
                      position: "relative",
                      margin: "0",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translateY(-50%) translateX(-50%)",
                      }}
                    >
                      {caller.caller
                        .split(" ")
                        .map(string => string.slice(0, 1))
                        .join("")}
                    </div>
                  </div> */}
      <span style={{ marginLeft: "10px" }}>{caller.caller}</span>
    </MenuItem>
  );
}

Caller.propTypes = {
  caller: PropTypes.object,
};
