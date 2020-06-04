console.log("hello world")

let user1 = {
  name: "Oliver Levy",
  comment: "wow I love this band so much! Holy moly I will got to all of their shows forever and ever and ever wowowowowow.",
  dateAdded: "12/05/2020"
};

console.log(user1['name'])

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

let testArray = [user1, user2, user3]

console.log(testArray[1]);
console.log(testArray.length);

function addNewComment(){
  for(let i = 0; i < testArray.length; i++){
    console.log(testArray[i]["name"]);
    console.log(testArray[i]["comment"]);
    console.log(testArray[i]["dateAdded"]);
  }
}

console.log(addNewComment())


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

// it works!
// console.log(previousCommentInfo)

// create img placeholder
let previousCommentImgCircle = document.createElement("div");
previousCommentImgCircle.className = "previous-comment__img-circle";

// create container "previous-comment"
let previousComment = document.createElement("section");
previousComment.className = "previous-comment";

// add img circle and previousCommentInfo to previous comment
previousComment.appendChild(previousCommentImgCircle);
previousComment.appendChild(previousCommentInfo);

// so far so good!
// console.log(previousComment);

// create commentCard section

let commentCard = document.createElement("section");
commentCard.className = "comment-card";

// add previousComment and divider to commentCard
commentCard.appendChild(previousComment);
commentCard.appendChild(divider);

// still working omg can't believe it
// console.log(commentCard)

// final parent lol probably could have built this differently
let commentParent = document.getElementById("comments");

commentParent.prepend(commentCard);

// console.log(commentParent)
}


writeComment(user1['name'], user1['dateAdded'], user1['comment']);












