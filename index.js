function getFirstSelector(selector){
 var ans =document.querySelector(selector)
 return ans
}

function nestedTarget(){
  var ans;
  ans=document.querySelector('#nested .target')
  return ans
}

function increaseRankBy(n){
const array=document.querySelectorAll('.ranked-list li')
 for (let i=0;i<array.length;i++){
   
   array[i].innerHTML= (parseInt(array[i].innerHTML)+n).toString()
 }
}

deepestChild()

function deepestChild(){
  var lis=document.getElementById('grand-node').querySelectorAll('div')
return lis[lis.length-1]
}