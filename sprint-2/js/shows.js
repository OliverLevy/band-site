// Makes the "Shows" table


// create array of objects for all the shows
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

console.log(shows)



// create elements

let showsItem = document.createElement("section")
showsItem.className = "shows__item"

function makeHeader(){
  let showItemHeader = document.createElement("h5");
  showItemHeader.className = "shows__item-header"
}

function makeInfoBold(){
  showsItemInfo.className = " shows__item-info--bold"
}

function makeInfo(){
  let showsItemInfo = document.createElement("p");
  showsItemInfo.className = "shows__item-info"
}


let showsBtn = document.createElement("button")
showsBtn.className = "btn comment__add-btn shows__btn"

let divider = document.createElement("div")
divider.className = "divider";

function makeItem(){

}


// create textnode to go within those elements


// make function that populates the textnodes with object values from the array