import "./Step.style.scss";
import { useLocation } from "react-router";
const Step = () => {
  const currentRoute = useLocation().pathname;

  const stepList = [
    { number: 1, title: "YOUR INFO", route: "/" },
    { number: 2, title: "SELECT PLAN", route: "/plan" },
    { number: 3, title: "ADD-ONS", route: "/addon" },
    { number: 4, title: "SUMMARY", route: "/summary" },
  ];
  return (
    <div className="step-container">
      <ul>
        {stepList.map((list) => (
          <li key={list.number}>
            <div className="step-box">
              <div
                className={`number ${
                  currentRoute === list.route ? "active" : ""
                }`}
              >
                {list.number}
              </div>
              <div className="step-title">
                <span>STEP&nbsp;{list.number}</span>
                <p>{list.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Step;
