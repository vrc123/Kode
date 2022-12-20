export default function SignUpFormValidation(profile) {
    
  let errorArray = [];
  
  if (!profile.firstName != "") {
    errorArray.push("First name is required!");
  }
  
  if ((!profile.firstName.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) || profile.firstName.includes(" ")) {
    errorArray.push("First name must be letters only!");
  }
  
  if (!profile.firstName.match(/^[A-ZÆØÅ]/g)) {
    errorArray.push("First name must be capitalized!");
  }
  
  if (!profile.lastName != "") {
    errorArray.push("Last name is required!");
  }
  
  if ((!profile.lastName.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) || profile.lastName.includes(" ")) {
    errorArray.push("Last name must be letters only!");
  }
  
  if (!profile.lastName.match(/^[A-ZÆØÅ]/g)) {
    errorArray.push("Last name must be capitalized!");
  }
  
  if (!profile.email != "") {
    errorArray.push("Email is required!");
  }
  
  if (!profile.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)) {
    errorArray.push("Email must be a valid Email!");
  }

  if (!(profile.password.length >= 8)) {
    errorArray.push("Password must at least be 8 chars long!");
  }

  if (!profile.conditions == true) {
    errorArray.push("You must accept the conditions!");
  }
    
  return errorArray;
  
}