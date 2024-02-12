import { useEffect } from "react";
import { getUser } from "../../redux/features/userSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";

const TestPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return;
};

export default TestPage;
