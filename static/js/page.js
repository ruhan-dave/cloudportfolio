function getActiveTocElement(e){return[...e].find(e=>e.getBoundingClientRect().y<=0)}function 
findCorrespondingTocTitle(n){return[...document.querySelectorAll("#toc li 
a")].find(e=>e.href.substring(e.href.indexOf("#"))==="#"+n.id)}document.addEventListener("DOMContentLoaded",function(){if(null!==document.getElementById("toc")){var 
e=document.querySelectorAll("#toc li a");let 
n=[],t=([...e].forEach(e=>{n.push(e.href.substring(e.href.indexOf("#")))}),document.querySelectorAll(n.join(","))),i=[...t].reverse();var 
e=getActiveTocElement(i)||t[0],o=(findCorrespondingTocTitle(e).classList.add("bg-blue-700"),e);window.addEventListener("scroll",()=>{var 
e=getActiveTocElement(i)||t[0];e!==o&&(findCorrespondingTocTitle(o).classList.remove("bg-blue-700"),findCorrespondingTocTitle(e).classList.add("bg-blue-700"),o=e)})}});
