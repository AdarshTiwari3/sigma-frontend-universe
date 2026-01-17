import { useMobile } from "./use-mobile";
import { useWindowWidth } from "./use-window-width";

const DisplayWindowSizeBoard = () => {
  const width = useWindowWidth();
  const isMobile = useMobile();

  return (
    <div className="p-8">
      <h2>Screen Width: {width}</h2>
      <p>Is mobile screen: {isMobile ? "true" : "false"}</p>
    </div>
  );
};

export default DisplayWindowSizeBoard;
