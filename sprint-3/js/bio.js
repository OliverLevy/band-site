// hello world

function displayComment(test){
// content is found first

let nameInput = document.createTextNode(test.name);
let dateInput = document.createTextNode(test.timestamp);
let textInput = document.createTextNode(test.comment);


// create line divider but we'll only use this at the end
let divider = document.createElement("div");
divider.className = "divider";


// create the inner most children first and assign class names
let previousCommentDate = document.createElement("h5");
previousCommentDate.className = "previous-comment__date";
previousCommentDate.appendChild(dateInput);

let previousCommentName = document.createElement("h4");
previousCommentName.className = "previous-comment__name";
previousCommentName.appendChild(nameInput);


// create container for children
let previousCommentInfoContainer = document.createElement("section");
previousCommentInfoContainer.className = "previous-comment__info-container";

// add children to parent in correct order
previousCommentInfoContainer.appendChild(previousCommentName);

previousCommentInfoContainer.appendChild(previousCommentDate);

// create p tag
let previousCommentText = document.createElement("p");
previousCommentText.className = "previous-comment__text";
previousCommentText.appendChild(textInput)

// create container for all comment info + text
let previousCommentInfo = document.createElement("section");
previousCommentInfo.className = "previous-comment__info";


// add everything above to the the previousCommentInfo container

previousCommentInfo.appendChild(previousCommentInfoContainer);
previousCommentInfo.appendChild(previousCommentText);


// create img placeholder
let previousCommentImgCircle = document.createElement("div");
previousCommentImgCircle.className = "previous-comment__img-circle";

// create container "previous-comment"
let previousComment = document.createElement("section");
previousComment.className = "previous-comment";

// add img circle and previousCommentInfo to previous comment
previousComment.appendChild(previousCommentImgCircle);
previousComment.appendChild(previousCommentInfo);

// create commentCard section

let commentCard = document.createElement("section");
commentCard.className = "comment-card";

// add previousComment and divider to commentCard
commentCard.appendChild(previousComment);
commentCard.appendChild(divider);

document.getElementById("comments").prepend(commentCard);
}





// let date = function makeDate(){
//   let date = new Date().getUTCDate();
//   let month = new Date().getUTCMonth() + 1;
//   let year = new Date().getUTCFullYear();
//  return (`${date}/${month}/${year}`);
// }


// let time = function makeTime(){
//   let hour = new Date().getUTCHours();
//   let minute = new Date().getUTCMinutes();
//   let second = new Date().getUTCSeconds();
//  return (`${hour}:${minute}:${second}`);
// }

// submit values to "displayComment" function
let form = document.querySelector(".comment__add");

function submissionHandler(event){
  event.preventDefault();
  let newUser = {
    name: event.target.userName.value,
    comment: event.target.comment.value,
    timestamp: new Date().toLocaleString().split(' ')[0]
    // timeAdded: time(),
  }
  if (newUser.name === "" || newUser.comment === ""){
    return;
  } else {
    // users.push(newUser);
    displayComment(newUser);
    event.target.reset();
  }
  
}

form.onsubmit = function(event){
  submissionHandler(event);
}


console.log("hello world")

// GET /comments
// POST /comments
// GET /showdates

// let api = "https://project-1-api.herokuapp.com/"
// let apiKey = "069992ce-754e-4135-b5a2-bcdbad47401b"
let apiComment = "https://project-1-api.herokuapp.com/comments?api_key=069992ce-754e-4135-b5a2-bcdbad47401b"
let apishowdates = "https://project-1-api.herokuapp.com/showdates?api_key=069992ce-754e-4135-b5a2-bcdbad47401b"


// name:
// comment:
// timestamp:

axios.get("https://project-1-api.herokuapp.com/comments?api_key=069992ce-754e-4135-b5a2-bcdbad47401b")
.then(success => {
  console.log(success.data[0])
  for(let i = 0; i < success.data.length; i++){
    displayComment(success.data[i])
  }
})
.catch(error =>{
  console.error("Something went wrong", error)
})

let rightNow = new Date()