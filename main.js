// console.log('MOMENT', moment.unix(1535531964).format('MMMM Do YYYY'))
let messages = []
for (let i=200; i>0; i--) {
  messages.push({
    msg: `msg${i}`,
    timestamp: moment().unix() - (i*10000)
  })
}

let numberOfItems = 50

let lastTimestamp = Number
function renderList(numberOfItems) {
  let listElement = document.getElementById('msg-list')

  for (let i=0; i<numberOfItems; i++) {
    let item = document.createElement('li')
    let item1 = document.createElement('a')

    if (moment.unix(messages[i+(messages.length - numberOfItems)].timestamp).format('MMMM Do YYYY') !== moment.unix(lastTimestamp).format('MMMM Do YYYY')) {
      lastTimestamp = messages[i+(messages.length - numberOfItems)].timestamp
      item1.appendChild(document.createTextNode(moment.unix(messages[i+(messages.length - numberOfItems)].timestamp).format('MMMM Do YYYY')))
    }
    item.appendChild(document.createTextNode(messages[i+(messages.length - numberOfItems)].msg))
    listElement.appendChild(item1);
    listElement.appendChild(item);
  }
}
renderList(numberOfItems)

function addToList (numberOfNewItems) {
  let listElement = document.getElementById('msg-list')
  let lastDate = listElement.firstElementChild.innerHTML
  console.log(listElement.firstElementChild.innerHTML)
  for (let i=numberOfNewItems-1; i>=0; i--) {
    let item = document.createElement('li')
    let item1 = document.createElement('a')

    // listElement.removeChild(listElement.childNodes[0])
    console.log(item1.innerHTML)
    if (moment.unix(messages[i+(messages.length - (numberOfNewItems + numberOfItems))].timestamp).format('MMMM Do YYYY') !== lastDate) {
      lastDate = moment.unix(messages[i+(messages.length - (numberOfNewItems + numberOfItems))].timestamp).format('MMMM Do YYYY')
      item1.appendChild(document.createTextNode(moment.unix(messages[i+(messages.length - (numberOfNewItems + numberOfItems))].timestamp).format('MMMM Do YYYY')))
      item.appendChild(document.createTextNode(messages[i+(messages.length - (numberOfNewItems + numberOfItems))].msg))
      listElement.insertBefore(item, listElement.firstElementChild);
      listElement.insertBefore(item1, listElement.firstElementChild);
    } else {
      // item2.appendChild(document.createTextNode(moment.unix(messages[i+(messages.length - (numberOfNewItems + numberOfItems))].timestamp).format('MMMM Do YYYY')))      
      item.appendChild(document.createTextNode(messages[i+(messages.length - (numberOfNewItems + numberOfItems))].msg))
      listElement.insertBefore(item, listElement.firstElementChild.nextSibling);
    }

    
    // listElement.insertBefore(item2, listElement.firstElementChild.nextSibling);
  }

}
function loadMore() {
  addToList(2)
  numberOfItems += 2
}