import {
  AdviseStyle,
  PatternDivider,
  PatternDividerMobiLe,
} from "./Advise.style";
import AdviseBtn from "./NewAdviseBtn";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
interface AdviseData {
  id: number;
  advice: string;
}
const Advise = () => {
  const [data, setData] = useState<AdviseData | null>(null);
  const isMobile = useMediaQuery({
    query: "(max-width: 560px)",
  });
  const fetchItems = async function () {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();
      if (!data) {
        return;
      }
      setData(data.slip);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <AdviseStyle>
        <h1>ADVICE #{data.id}</h1>
        <p>"{data.advice}"</p>
        {isMobile ? <PatternDividerMobiLe /> : <PatternDivider />}
        <AdviseBtn onClick={fetchItems} />
      </AdviseStyle>
    </>
  );
};
export default Advise;
