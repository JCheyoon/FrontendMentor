import { Link } from "react-router-dom";
import Button from "../Components/Button.component";

const AddOn = () => {
  return (
    <div>
      <h1>AddOn</h1>
      <Link to="/plan">
        <Button title="Go Back" ghost={true} />
      </Link>
      <Link to="/summary">
        <Button title="Next Step" ghost={false} />
      </Link>
    </div>
  );
};

export default AddOn;
