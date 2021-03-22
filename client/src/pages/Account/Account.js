import "./Account.css";

function Account() {
  return (
    <div className="accountMain">
      <div className="accountBody">
        <h1>CREATE AN ACCOUNT</h1>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button>Create an account</button>
      </div>
    </div>
  );
}

export default Account;