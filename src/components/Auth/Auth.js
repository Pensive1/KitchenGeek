const Auth = () => {
  return (
    <form>
      <h3>Sign in</h3>

      <div>
        <label htmlFor="usrEmail"></label>
        <input type="email" name="usrEmail" id="usrEmail" />
      </div>

      <div>
        <label htmlFor="usrPassword"></label>
        <input type="password" name="usrPassword" id="usrPassword" />
      </div>
    </form>
  );
};

export default Auth;
