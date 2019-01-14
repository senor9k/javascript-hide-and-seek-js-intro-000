
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(nested, target) {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(i) + 1)
  }
}
