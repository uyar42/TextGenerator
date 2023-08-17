import { useDispatch, useSelector } from "react-redux";
import { getTexts } from "./redux/textSlice";
import Text from "./Components/Text";
import Form from "./Components/Form";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      {/* en son paras işlemiyordu oraya bakıyorduk */}
      <h2 style={{ textAlign: "center" }}>Text Generator APP</h2>
      <hr></hr>
      <Form />
      <Text />
    </>
  );
}

export default App;
