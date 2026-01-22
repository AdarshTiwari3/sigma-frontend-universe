import { useDebounce } from "./use-debounce";
import { useMobile } from "./use-mobile";
import { useWindowWidth } from "./use-window-width";

const DisplayWindowSizeBoard = () => {
  const width = useWindowWidth();
  const debouncedWidth = useDebounce(width, 150);
  const isMobile = useMobile();
  const isMobileDebounced = debouncedWidth < 768;
  // debounce is here for just implementation purpose otherwise it is over engineered here as it will slow down the UX update so use it where it is required like search input and other usecases

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
