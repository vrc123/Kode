export default function EnsembleFormValidation(ensemble) {

  let errorArray = [];
  
  if (ensemble.name == "") {
    errorArray.push("Name is required!");
  }
  
  if (!ensemble.name.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
    errorArray.push(
      "Name must begin with a capitalized letter or a number!"
    );
  }

  if (!ensemble.description == "") {
    if (!ensemble.description.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
      errorArray.push(
        "Description must begin with a capitalized letter or a number!"
      );
    }
  }

  if (!ensemble.website == "") {
    if (!ensemble.website.match(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)/g)) {
      errorArray.push("Website must be a url");
    }
  }
  
  if (!ensemble.zipCode.match(/[0-9]{4,4}/g)) {
    errorArray.push("Zipcode must be 4 numbers");
  }
  
  if (ensemble.city == "") {
    errorArray.push("City is required!");
  }
  
  if ((!ensemble.city.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) || ensemble.city.includes(" ")) {
    errorArray.push("City must be letters only!");
  }
  
  if (!ensemble.city.match(/^[A-ZÆØÅ]/g)) {
    errorArray.push("City must be capitalized!");
  }

  if (ensemble.activeMusicians == "") {
    errorArray.push("Number of active musicians is required!");
  }

  return errorArray;
}