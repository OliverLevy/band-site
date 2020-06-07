// Makes the "Shows" table


// array of objects for all the shows
let show1 = {
  date: "Mon Dec 17 2018",
  venue: "Ronald Lane",
  location: "San Fancisco, CA"
}

let show2 = {
  date: "Tue Jul 18 2019",
  venue: "Pier 3 East",
  location: "San Fancisco, CA"
}

let show3 = {
  date: "Fri Jul 22 2019",
  venue: "View Loungue",
  location: "San Fancisco, CA"
}

let show4 = {
  date: "Sat Aug 12 2019",
  venue: "Hyatt Agency",
  location: "San Fancisco, CA"
}

let show5 = {
  date: "Fri Sep 05 2019",
  venue: "Moscow Center",
  location: "San Fancisco, CA"
}

let show6 = {
  date: "Wed Aug 11 2019",
  venue: "Pres Club",
  location: "San Fancisco, CA"
}

let shows = [show1, show2, show3, show4, show5, show6]


// functions to shorten my code
function makeHeader(header){
  let showsItemHeader = document.createElement("h5");
  showsItemHeader.className = "shows__item-header";

  let input = document.createTextNode(header)
  showsItemHeader.appendChild(input)
  return showsItemHeader;
}

function makeInfoBold(boldDate){
  let showsItemInfoBold = document.createElement("p");
  showsItemInfoBold.className = "shows__item-info shows__item-info--bold"

  let input = document.createTextNode(boldDate)
  showsItemInfoBold.appendChild(input)
  return showsItemInfoBold;
}

function makeInfo(info){
  let showsItemInfo = document.createElement("p");
  showsItemInfo.className = "shows__item-info"

  let input = document.createTextNode(info)
  showsItemInfo.appendChild(input)
  return showsItemInfo;
}





let showsSection = document.getElementById("shows")

let showsHeader = document.createElement("h1");
showsHeader.className = "shows__header"
let showsTitle = document.createTextNode("Shows");
showsHeader.appendChild(showsTitle);
showsSection.appendChild(showsHeader);

let showsCard = document.createElement("section");
showsCard.className = "shows__card";
showsSection.appendChild(showsCard)



// function that builds the "shows__card"
function makeShowItem(obj){

  let dateHeaderEl = makeHeader("DATE")
  let dateInfoEl = makeInfoBold(obj.date)

  let venueHeaderEl = makeHeader("VENUE")
  let venueInfoEl = makeInfo(obj.venue)

  let addressHeaderEl = makeHeader("LOCATION")
  let addressInfoEl = makeInfo(obj.location)

  

  let showsDateDiv = document.createElement("div")
  showsDateDiv.className = "shows__date-div";
  showsDateDiv.appendChild(dateHeaderEl)
  showsDateDiv.appendChild(dateInfoEl)
  

  let showsVenueDiv = document.createElement("div")
  showsVenueDiv.className = "shows__venue-div";
  showsVenueDiv.appendChild(venueHeaderEl)
  showsVenueDiv.appendChild(venueInfoEl)

  let showsLocationDiv = document.createElement("div")
  showsLocationDiv.className = "shows__location-div";
  showsLocationDiv.appendChild(addressHeaderEl)
  showsLocationDiv.appendChild(addressInfoEl)


  let showsItem = document.createElement("section")
  showsItem.className = "shows__item"

  let showsBtn = document.createElement("button")
  showsBtn.className = "btn comment__add-btn shows__btn"
  let btnText = document.createTextNode("BUY TICKET")
  showsBtn.appendChild(btnText)

  let divider = document.createElement("div")
  divider.className = "divider";

  showsItem.appendChild(showsDateDiv)
  showsItem.appendChild(showsVenueDiv)
  showsItem.appendChild(showsLocationDiv)
  showsItem.appendChild(showsBtn)
  showsCard.appendChild(showsItem)
  showsCard.appendChild(divider)

  
}

function pullInfo(arr){
  for(let i = 0; i < arr.length; i++){
    makeShowItem(arr[i])
  }
}

pullInfo(shows)



// add class to first three
let findFirst = document.querySelector(".shows__item")
let firstHeaders = findFirst.getElementsByClassName("shows__item-header");

function addClass(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i].classList.add("shows__item-header--show-me")
  }
}

addClass(firstHeaders);

