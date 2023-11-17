import Button from "../Components/Button.component";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div>
      <h1>Info</h1>
      <Link to="/plan">
        <Button title="Next Step" ghost={false} />
      </Link>
    </div>
  );
};

export default Info;
