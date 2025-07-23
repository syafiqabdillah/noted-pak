import { useState } from "react";
import { useNavigate } from "react-router";
import { setCookie } from "../../utils/cookie";
import { Button } from "../atom/Button";
import { Card } from "../atom/Card";
import { Input } from "../atom/Input";
import { Page } from "../atom/Page";

const USER = [
  {
    id: 1,
    username: "user1",
    password: "password1",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
  },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    if (!username || !password) {
      alert("Username and password cannot be empty");
      return;
    }
    const user = USER.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      console.log(user);
      setUsername("");
      setPassword("");
      setCookie("username", username);
      navigate("/todo");
    } else {
      alert("Invalid username or password");
      setUsername("");
      setPassword("");
    }
  }

  return (
    <Page className='items-center justify-center'>
      <Card className='flex glass bg-white/40 min-w-sm'>
        <div className='flex-1'>
          <h1 className='text-2xl font-bold mb-4'>Welcome</h1>
          <form className='flex flex-col gap-4'>
            <Input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleLogin(e);
                }
              }}
            />
            <Input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleLogin(e);
                }
              }}
            />
            <Button
              type='submit'
              disabled={!username || !password}
              className=''
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
        </div>
      </Card>
    </Page>
  );
};

export default Login;
