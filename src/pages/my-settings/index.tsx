import { useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";

export default () => {
  const name = useSelector((state: RootStateOrAny) => state.UserReducer.firstName);

  return (
    <>
      <div>
          <Link to="/">Go back to the homepage</Link>
      </div>
      <div>
          {name ? (
              `Hello, ${name}`
          ) : (
              `Hello, Visitor`
          )}
      </div>
    </>
  )
}
