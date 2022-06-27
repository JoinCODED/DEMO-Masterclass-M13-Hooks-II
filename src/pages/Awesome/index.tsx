import AwesomeForm from "./AwesomeForm";
import AwesomeInfo from "./AwesomeInfo";
import { useAwesomeData } from "./hooks";

const Awesome = () => {
  const { awesome, edit, onSubmit, onToggle } = useAwesomeData();

  return edit ? (
    <AwesomeForm defaultValues={awesome} onSubmit={onSubmit} />
  ) : (
    <AwesomeInfo data={awesome} onClick={onToggle} />
  );
};

export default Awesome;
