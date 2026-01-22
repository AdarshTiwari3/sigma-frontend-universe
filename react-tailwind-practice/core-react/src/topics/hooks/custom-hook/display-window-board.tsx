import { useDebounce } from "./use-debounce";
import { useMobile } from "./use-mobile";
import { useWindowWidth } from "./use-window-width";

const DisplayWindowSizeBoard = () => {
  const width = useWindowWidth();
  const debouncedWidth = useDebounce(width, 150);
  const isMobile = useMobile();
  const isMobileDebounced = debouncedWidth < 768;

  return (
    <div className="p-8">
      <h2>Screen Width: {width}</h2>
      <h2>Debounced Width:{debouncedWidth}</h2>
      <p>Is mobile screen: {isMobile ? "true" : "false"}</p>
      <p>Is mobile screen: {isMobileDebounced ? "true" : "false"}</p>
    </div>
  );
};

export default DisplayWindowSizeBoard;
