function verify(password) {
  if (password === null) {
    return "Password rejected";
  }
  if (password.length < 8) {
    return "Password rejected";
  }
  if (/[A-Z]/.test(password) === false) {
    return "Password rejected";
  }
  if (/\d/.test(password) === false) {
    return "Password rejected";
  } else {
    return "Password accepted";
  }
}

module.exports = verify;
