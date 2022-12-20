export default function ProfileChangePasswordFormValidation(profile) {
    
  let errorArray = [];
  
  if (!(profile.password.length >= 8)) {
    errorArray.push("Password must at least be 8 chars long!");
  }

  return errorArray;
}