export default function EnsemblePostFormValidation(post) {
    
  let errorArray = [];

  if (!post.title != "") {
    errorArray.push("Title is required");
  }

  if (!post.title.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
    errorArray.push("Title must begin with a capitalized letter or a number!");
  }

  if(!post.description == "") {
    if (!post.description.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
      errorArray.push("Description must begin with a capitalized letter or a number!");
    }
  }

  if (!post.instrument != "") {
    errorArray.push("Instrument is required");
  }

  if (!post.minimumSkillLevel != "") {
    errorArray.push("Minimum skill level is required");
  }

  return errorArray;
}