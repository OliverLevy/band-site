// hello world



let testTime = 1591996318458
let testNow = Date.now()
let test = testNow - testTime

doMath = (userTime) => {
  let min = 1000 * 60
  let hour = 1000 * 60 * 60
  let day = 1000 * 60 * 60 * 24
  let month = 1000 * 60 * 60 * 24 * 30
  let year = 1000 * 60 * 60 * 24 * 365
  let testTime = userTime
  let testNow = Date.now()
  let output = testNow - testTime
  if(output < hour){
    
    return output/min
  } else if(output < day){
    return output/hour
  } else if (output < month){
    return output/hour
  } else {
    return output/month
  }
}
let output = doMath(testTime)
let hourz = Math.trunc(output)
let minz = Math.trunc((output%1)*60)
console.log(`Posted ${hourz}hr ago`)




function displayComment(test){
  let nameInput = test.name;
  let dateInput = new Date(test.timestamp).toLocaleDateString()
  let textInput = test.comment;


  let divider = document.createElement("div");
  divider.classList.add("divider");


  let previousCommentDate = document.createElement("h5");
  previousCommentDate.classList.add("previous-comment__date");
  previousCommentDate.innerText = dateInput;

  let previousCommentName = document.createElement("h4");
  previousCommentName.classList.add("previous-comment__name");
  previousCommentName.innerText = nameInput;


  let previousCommentInfoContainer = document.createElement("section");
  previousCommentInfoContainer.classList.add("previous-comment__info-container");

  previousCommentInfoContainer.appendChild(previousCommentName);
  previousCommentInfoContainer.appendChild(previousCommentDate);

  let previousCommentText = document.createElement("p");
  previousCommentText.classList.add("previous-comment__text");
  previousCommentText.innerText = textInput;

  let previousCommentInfo = document.createElement("section");
  previousCommentInfo.classList.add("previous-comment__info");

  previousCommentInfo.appendChild(previousCommentInfoContainer);
  previousCommentInfo.appendChild(previousCommentText);

  let previousCommentImgCircle = document.createElement("div");
  previousCommentImgCircle.classList.add("previous-comment__img-circle");

  let previousComment = document.createElement("section");
  previousComment.classList.add("previous-comment");

  previousComment.appendChild(previousCommentImgCircle);
  previousComment.appendChild(previousCommentInfo);

  let commentCard = document.createElement("section");
  commentCard.classList.add("comment-card");

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
