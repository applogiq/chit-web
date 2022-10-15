/** **************************** Import Types ****************************** */
import { toast } from "react-toastify";
import { JOIN_REQUEST, JOIN_SUCCESS, JOIN_FAILURE } from "../types/joinType";

/** **************************** Import API ****************************** */
import { createJoinScheme } from "../../api/create";

export const joinRequest = () => ({
  type: JOIN_REQUEST,
});

export const joinSuccess = (users) => ({
  type: JOIN_SUCCESS,
  payload: users,
});

export const joinFailure = (error) => ({
  type: JOIN_FAILURE,
  payload: error,
});

export const CreateJoinData = (data) =>
  async function (dispatch) {
    dispatch(joinRequest());
    return createJoinScheme(data)
      .then((res) => {
        console.log(res, "res records");
        if (res?.success) {
          dispatch(joinSuccess(res));

          toast.success("Join request sent succesfully");
          return res;
        }
        dispatch(joinFailure(res.message));
        toast.error(res?.detail?.error);
        return res?.message;
      })
      .catch((err) => console.log("Catch Error:", err));
  };
