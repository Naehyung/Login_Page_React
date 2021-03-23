import "./Password.css";

function Password() {
  return (
    <div className="passwordMain">
      <div className="passwordBody">
        <h1>SEARCH YOUR PASSWORD</h1>
        <input type="text" placeholder="Username" />
        <button>Search your password</button>
      </div>
    </div>
  );
}

export default Password;