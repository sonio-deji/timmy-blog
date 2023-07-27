import "./SignUp.css";
import { useEffect, useState } from "react";
import SubmitButton from "../../components/Buttons/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation, redirect } from "react-router-dom";
import { register } from "../../redux/actions/userActions";

function SignUp() {
  const Location = useLocation();
  const redirect = Location.search ? Location.search.split("=")[1] : "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const user = useSelector(state => state.userLogin.user)
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);
    dispatch(register(username, email, password));

  };

  useEffect(() => {
    if (user) {
      Navigate(redirect);
    }
  }, [user, redirect]);

  return (
    <div className="SignUpForm">
      <div className="SignUpLeft"></div>
      <div className="userformHeader">
        <div className="SignUpRight">
          <h1 className="my-2">Welcome</h1>
          <p className="my-2">Let's sign you up quickly</p>
          <div className="actualForm">
            <div className="form-control">
              <label>
                <input
                  name="name"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                  type="text"
                  placeholder="username"
                />
              </label>
            </div>
            <div className="form-control">
              <label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  name="name"
                  type="email"
                  placeholder="email"
                />
              </label>
            </div>
            <div className="form-control">
              <label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  name="name"
                  type="password"
                  placeholder="password"
                />
              </label>
            </div>
            <div className="form-control">
              <label>
                <input
                  name="name"
                  type="password"
                  placeholder="confirm password"
                />
              </label>
            </div>
            <div className="form-control userFormFooter">
            <SubmitButton action={'Sign-up'}/>
              <div className="userFormFooterLeft">
                <span>Already have an account ?</span>
                <div style={{ color: "#6EEB83" }}>
                  <Link to={"/login"} className="sign--link">
                    log-in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
