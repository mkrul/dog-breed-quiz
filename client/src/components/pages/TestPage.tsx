import { useEffect } from "react";
import { getUser } from "../../redux/features/userSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const TestPage = () => {
  const dispatch = useAppDispatch();
  const { ...user } = useAppSelector((state) => state.user);
  console.log("in testpage", user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return <div>TestPage</div>;
};

export default TestPage;
