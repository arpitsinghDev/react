// Validate email and password using regex
export function validateAuthForm(email, password) {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=]{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) {
    return 'Invalid email address';
  }
  if (!isPasswordValid) {
    return 'Password must be at least 8 characters and contain letters and numbers';
  }
  return null;
}
