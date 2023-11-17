import Button from "../Components/Button.component";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <div>
      <h1>Summary</h1>
      <Link to="/addon">
        <Button title="Go Back" ghost={true} />
      </Link>
      <Button title="confirm" ghost={false} confirm={true} />
    </div>
  );
};

export default Summary;
