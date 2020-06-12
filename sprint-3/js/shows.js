// functions to shorten my code
function makeHeader(header){
  let showsItemHeader = document.createElement("h5");
  showsItemHeader.classList.add("shows__item-header");

  let input = document.createTextNode(header);
  showsItemHeader.appendChild(input);
  return showsItemHeader;
}

function makeInfoBold(boldDate){
  let showsItemInfoBold = document.createElement("p");
  showsItemInfoBold.classList.add("shows__item-info shows__item-info--bold");

  let input = document.createTextNode(boldDate);
  showsItemInfoBold.appendChild(input);
  return showsItemInfoBold;
}

function makeInfo(info){
  let showsItemInfo = document.createElement("p");
  showsItemInfo.classList.add("shows__item-info");

  let input = document.createTextNode(info);
  showsItemInfo.appendChild(input);
  return showsItemInfo;
}

let showsSection = document.getElementById("shows");

let showsHeader = document.createElement("h1");
showsHeader.classList.add("shows__header");
let showsTitle = document.createTextNode("Shows");
showsHeader.appendChild(showsTitle);
showsSection.appendChild(showsHeader);

let showsCard = document.createElement("section");
showsCard.classList.add("shows__card");
showsSection.appendChild(showsCard);



// function that builds the "shows__card"
function makeShowItem(obj){

  let dateHeaderEl = makeHeader("DATE");
  let dateInfoEl = makeInfoBold(obj.date);

  let venueHeaderEl = makeHeader("VENUE");
  let venueInfoEl = makeInfo(obj.place);

  let addressHeaderEl = makeHeader("LOCATION");
  let addressInfoEl = makeInfo(obj.location);

  

  let showsDateDiv = document.createElement("div");
  showsDateDiv.classList.add("shows__date-div");
  showsDateDiv.appendChild(dateHeaderEl);
  showsDateDiv.appendChild(dateInfoEl);
  

  let showsVenueDiv = document.createElement("div");
  showsVenueDiv.classList.add("shows__venue-div");
  showsVenueDiv.appendChild(venueHeaderEl);
  showsVenueDiv.appendChild(venueInfoEl);

  let showsLocationDiv = document.createElement("div");
  showsLocationDiv.classList.add("shows__location-div");
  showsLocationDiv.appendChild(addressHeaderEl);
  showsLocationDiv.appendChild(addressInfoEl);


  let showsItem = document.createElement("section");
  showsItem.classList.add("shows__item");

  let showsBtn = document.createElement("button");
  showsBtn.classList.add("btn comment__add-btn shows__btn");
  let btnText = document.createTextNode("BUY TICKET");
  showsBtn.appendChild(btnText);

  let divider = document.createElement("div");
  divider.classList.add("divider");

  showsItem.appendChild(showsDateDiv)
  showsItem.appendChild(showsVenueDiv)
  showsItem.appendChild(showsLocationDiv)
  showsItem.appendChild(showsBtn)
  showsCard.appendChild(showsItem)
  showsCard.appendChild(divider)

  let findFirst = document.querySelector(".shows__item")
  let firstHeaders = findFirst.getElementsByClassName("shows__item-header");

  function addClass(arr){
    for(let i = 0; i < arr.length; i++){
      arr[i].classList.add("shows__item-header--show-me")
    }
  }
  addClass(firstHeaders);
}

let apiComment = "https://project-1-api.herokuapp.com/comments?api_key=069992ce-754e-4135-b5a2-bcdbad47401b"
let apishowdates = "https://project-1-api.herokuapp.com/showdates?api_key=069992ce-754e-4135-b5a2-bcdbad47401b"

axios.get(apishowdates)
.then(success => {
  console.log(success)
  console.log(success.data[0].place)
  for(let i = 0; i < success.data.length; i++){
    makeShowItem(success.data[i])
  }
})
.catch(error =>{
  console.error("Something went wrong", error)
})