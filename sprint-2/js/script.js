// hello world

function writeComment(name, date, text){
// content is found first
let nameInput = document.createTextNode(name);
let dateInput = document.createTextNode(date);
let textInput = document.createTextNode(text);

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

// this populates the function above that creates all the sections and appends them to the correct parents
// writeComment(user1['name'], user1['dateAdded'], user1['comment']);

// writeComment(user1['name'], user1['dateAdded'], user1['comment']);

let user1 = {
  name: "Oliver Levy",
  comment: "wow I love this band so much! Holy moly I will got to all of their shows forever and ever and ever wowowowowow.",
  dateAdded: "12/05/2020"
};

// console.log(user1['name'])

let user2 = {
  name: "Simone Ades",
  comment: "OMG WOWOWOW! I love this band so much! Holy moly I will got to all of their shows forever and ever and ever wowowowowow.",
  dateAdded: "12/05/2020"
};

let user3 = {
  name: "Bill Whatshisname",
  comment: "I've seen better. Wow I love this band so much! Holy moly I will got to all of their shows forever and ever and ever wowowowowow.",
  dateAdded: "12/05/2020"
};

let users = [user1, user2, user3]


function addNewComment(){
  for(let i = 0; i < users.length; i++){
    writeComment(users[i]["name"], users[i]["dateAdded"],users[i]["comment"])
  }
}
addNewComment();




// figures out current time
let d = new Date();
// get time
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = (`${hours}:${minutes}:${seconds}`)
// get date
let day = d.getDate();
let month = (d.getMonth() + 1);
let year = d.getFullYear();
let date = (`${month}/${day}/${year}`);
// assign date and time to hidden form element
document.getElementById("current-date").value = date;
document.getElementById("current-time").value = time;


// submit values to "writeComment" function
let form = document.querySelector(".comment__add");

function submissionHandler(event){
  event.preventDefault();
  writeComment(event.target.userName.value, event.target.date.value, event.target.comment.value)
  event.target.reset();
}

form.onsubmit = function(event){
  submissionHandler(event);
}