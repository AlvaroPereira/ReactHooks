import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default () => {
  const[firstName, setFirstName] = useState("");

  const dispatch = useDispatch();
  const name = useSelector((state: RootStateOrAny) => state.UserReducer.firstName);

  const trigger = () => {
    dispatch({
        type: "SET_FIRST_NAME",
        payload: { firstName: firstName }
    });
  }

  return (
    <>
      <div>
          {name ? (
              `Hello, ${name}`
          ) : (
              `Hello, Visitor`
          )}
      </div>
      <div>
          <Link to="my-settings">My Settings</Link>
      </div>
      <div>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value) } />
        <button onClick={(e) => trigger()}>Update first name</button>
      </div>
    </>
  )
}
