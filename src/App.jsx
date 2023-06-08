import { useEffect } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Container from "@mui/material/Container";

import { useDispatch } from "react-redux";
import { getCallers } from "./actions/callers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCallers());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="xs">
        <Main />
      </Container>
    </>
  );
}

export default App;
