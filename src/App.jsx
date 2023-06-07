import "./App.css";
import { useGetCallersQuery } from "./service/service";

function App() {
  const { data } = useGetCallersQuery();
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ data:", data);

  return <></>;
}

export default App;
