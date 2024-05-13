const ChangePassword = () => {

  return (
    <div className="ltn__myaccount-tab-content-inner">
    <div className="account-login-inner">
      <form
        action="#"
        className="ltn__form-box contact-form-box"
      >
        <h5 className="mb-30">Change Password</h5>
        <input
          type="password"
          name="password"
          placeholder="Current Password*"
        />
        <input
          type="password"
          name="password"
          placeholder="New Password*"
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm New Password*"
        />
        <div className="btn-wrapper mt-0">
          <button
            className="theme-btn-1 btn btn-block"
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default ChangePassword;