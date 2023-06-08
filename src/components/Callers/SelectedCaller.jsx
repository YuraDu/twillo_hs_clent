import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export default function SelectedCaller({ caller }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {caller?.caller}
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
          {caller?.phoneNumber}
        </Typography>
        <Typography variant="body2">{`Date: ${caller?.date}`}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="outlined" size="small">
          Change
        </Button>
        <Button variant="contained" color="error" size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

SelectedCaller.propTypes = {
  caller: PropTypes.object,
};
