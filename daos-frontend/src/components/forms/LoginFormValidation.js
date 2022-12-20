export default function LoginFormValidation(profile) {
    
    let errorArray = [];
  
    if (!profile.email != "") {
        errorArray.push("Email is required!");
    }
  
    if (!profile.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)) {
        errorArray.push("Email must be a valid Email!");
    }
  
    if (!(profile.password.length >= 8)) {
        errorArray.push("Password must at least be 8 chars long!");
    }
    
    return errorArray;
}