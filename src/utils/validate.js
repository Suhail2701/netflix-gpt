export const formValidation = ( email, password) => {
    console.log("email " + email);
    console.log("password " + password);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
   
    if(email === "") return "Enter your email Id";
    if(password === "") return "Enter your password";
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not Valid";

    return null;
}