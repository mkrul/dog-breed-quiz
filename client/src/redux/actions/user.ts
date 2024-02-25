import { setUserAction, setLoadingAction, setErrorAction, updateUserAction } from "../slices/userSlice";

export const fetchUser = () => async (dispatch: any) => {
  try {
    dispatch(setLoadingAction(true));
    const response = await fetch("http://localhost:5000/api/user");
    const data = await response.json();
    dispatch(setUserAction(data.user));
  } catch (error) {
    dispatch(setErrorAction('error fetching user!'));
  }
}

export const updateUser = (id: string, data: any) => async (dispatch: any) => {
  try {
    console.log('in actions/user.ts, id:', id);
    console.log('in actions/user.ts, data:', data);
    const response = await fetch(`http://localhost:5000/api/user/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    });

    console.log('in actions/user.ts, response:', response);
    if (response.status === 200) {
      const user = await response.json();
      dispatch(updateUserAction(user));
    } else {
      throw new Error("Error updating user");
    }
  } catch (error) {
    dispatch(setErrorAction('error updating user!'));
  }
}