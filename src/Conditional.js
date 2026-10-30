export default function Conditional({ isLogin }) {
  return (
    <div>
      <h3>Conditional Statements</h3>

      <div>{isLogin ? <h1>Welcome back!</h1> : <h1>Please Login</h1>}</div>
    </div>
  );
}
