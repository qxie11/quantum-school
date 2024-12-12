import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as themeActions from "@store/slices/theme";

const actions = {
  ...themeActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export default useActions;
