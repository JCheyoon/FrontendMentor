import { Link } from "react-router-dom";
import Button from "../Components/Button.component";

const Plan = () => {
  return (
    <div>
      <h1>Plan</h1>

      <Link to="/">
        <Button title="Go Back" ghost={true} />
      </Link>
      <Link to="/addon">
        <Button title="Next Step" ghost={false} />
      </Link>
    </div>
  );
};

export default Plan;
