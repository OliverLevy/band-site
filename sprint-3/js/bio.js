// hello world

function displayComment(test){
  let nameInput = document.createTextNode(test.name);
  let dateInput = document.createTextNode(new Date(test.timestamp).toLocaleDateString());
  let textInput = document.createTextNode(test.comment);


  let divider = document.createElement("div");
  divider.className = "divider";


  let previousCommentDate = document.createElement("h5");
  previousCommentDate.className = "previous-comment__date";
  previousCommentDate.appendChild(dateInput);

  let previousCommentName = document.createElement("h4");
  previousCommentName.classList.add("previous-comment__name");
  previousCommentName.appendChild(nameInput);


  let previousCommentInfoContainer = document.createElement("section");
  previousCommentInfoContainer.className = "previous-comment__info-container";

  previousCommentInfoContainer.appendChild(previousCommentName);
  previousCommentInfoContainer.appendChild(previousCommentDate);

  let previousCommentText = document.createElement("p");
  previousCommentText.className = "previous-comment__text";
  previousCommentText.appendChild(textInput)

  let previousCommentInfo = document.createElement("section");
  previousCommentInfo.className = "previous-comment__info";

  previousCommentInfo.appendChild(previousCommentInfoContainer);
  previousCommentInfo.appendChild(previousCommentText);

  let previousCommentImgCircle = document.createElement("div");
  previousCommentImgCircle.className = "previous-comment__img-circle";

  let previousComment = document.createElement("section");
  previousComment.className = "previous-comment";

  previousComment.appendChild(previousCommentImgCircle);
  previousComment.appendChild(previousCommentInfo);

  let commentCard = document.createElement("section");
  commentCard.className = "comment-card";

  commentCard.appendChild(previousComment);
  commentCard.appendChild(divider);

  document.getElementById("comments").prepend(commentCard);
}






let apiComment = "https://project-1-api.herokuapp.com/comments?api_key=069992ce-754e-4135-b5a2-bcdbad47401b";
let apishowdates = "https://project-1-api.herokuapp.com/showdates?api_key=069992ce-754e-4135-b5a2-bcdbad47401b";



axios.get("https://project-1-api.herokuapp.com/comments?api_key=069992ce-754e-4135-b5a2-bcdbad47401b")
.then(success => {
  console.log(success)
  for(let i = 0; i < success.data.length; i++){
    displayComment(success.data[i])
  }
})
.catch(error =>{
  console.error("Something went wrong", error)
})




function submissionHandler(event){
  event.preventDefault();
  let nameEl = event.target.userName.value;
  let commentEl = event.target.comment.value;
  axios
  .post("https://project-1-api.herokuapp.com/comments?api_key=069992ce-754e-4135-b5a2-bcdbad47401b", {
    name: nameEl,
    comment: commentEl
  })
  .then(success => {
    displayComment(success.data);
    event.target.reset();
  })
  .catch(err => {
    console.log("Something went wrong, good luck!", err)
  })
}


let form = document.querySelector(".comment__add");
form.onsubmit = function(event){
  submissionHandler(event);
}
