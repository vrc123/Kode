export default function EditProfileFormValidation(profile) {

  let errorArray = [];
  
    if (!profile.firstName != "") {
      errorArray.push("First name is required!");
    }
  
    if (!profile.firstName.match(/[A-ZÆØÅ]|[a-zÆØÅ]\w+/g)) {
      errorArray.push("First name must be letters only!");
    }
  
    if (!profile.firstName.match(/^[A-ZÆØÅ]/g)) {
      errorArray.push("First name must be capitalized!");
    }
  
    if (!profile.lastName != "") {
      errorArray.push("Last name is required!");
    }
  
    if (!profile.lastName.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) {
      errorArray.push("Last name must be letters only!");
    }
  
    if (!profile.lastName.match(/^[A-ZÆØÅ]/g)) {
      errorArray.push("Last name must be capitalized!");
    }

    if (!profile.description == "") {
        if (!profile.description.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
          errorArray.push("Description must begin with a capitalized letter or a number!");
        }
    }
  
    if (!profile.zipCode == "") {
        if (!profile.zipCode.match(/[0-9]{4,4}/g)) {
          errorArray.push("Zipcode must be 4 numbers!");
        }
    }
  
    if (!profile.city == "") {
        if (!profile.city.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) {
          errorArray.push("City must be letters only!");
        }

        if (!profile.city.match(/^[A-Za-zæøåÆØÅ.\s_-]+$/g)) {
          errorArray.push("City must be capitalized!");
        }
    }
  
    if (!profile.email != "") {
      errorArray.push("Email is required!");
    }
  
    if (!profile.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)) {
      errorArray.push("Email must be a valid Email!");
    }

    if (!profile.phone == "") {
        if (profile.phone.length != 8) {
          errorArray.push("Phone number must be 8 numbers long!");
        }
    }
  
    return errorArray;
}