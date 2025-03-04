function toggleSearchModal(){var 
e=document.getElementById("search-modal");e.classList.toggle("opacity-0"),e.classList.toggle("pointer-events-none"),document.body.classList.toggle("search-active"),[...document.body.classList].includes("search-active")&&(document.getElementById("search-input").value="",document.getElementById("search-input").focus())}function 
formatResultItem(e){return console.log(e),htmlToElement(`<li class="flex hover:bg-gray-200 dark:hover:bg-gray-600 
text-black dark:text-gray-200 p-2 rounded-lg border border-black dark:border-gray-200 bg-gray-200 dark:bg-gray-500 
rounded-lg hover:shadow-xl mb-2">
  <a href="${e.doc.path}">
  <span class="text-xl text-bold">${e.doc.title}</span>
  <span class="text-lg">${e.doc.description}</span>
  </a>
  </li>`)}function htmlToElement(e){var t=document.createElement("template");return 
e=e.trim(),t.innerHTML=e,t.content.firstChild}document.addEventListener("DOMContentLoaded",function(){document.getElementById("search").addEventListener("click",function(e){e.preventDefault(),toggleSearchModal()});document.querySelector(".modal-overlay").addEventListener("click",toggleSearchModal);for(var 
e=document.querySelectorAll(".modal-close"),o=0;o<e.length;o++)e[o].addEventListener("click",toggleSearchModal);document.onkeydown=function(e){let 
t=!1,n=!1;"key"in(e=e||window.event)?(t="Escape"===e.key||"Esc"===e.key,n="k"===e.key&&!0===e.metaKey):(n=75===e.keyCode&&e.metaKey,t=27===e.keyCode),n&&e.preventDefault(),(t&&document.body.classList.contains("search-active")||n)&&toggleSearchModal()};let 
a=elasticlunr.Index.load(window.searchIndex),l={bool:"AND",fields:{title:{boost:2},body:{boost:1}}},r,c,d=document.getElementById("search-input");document.getElementById("search-results");d.addEventListener("keyup",function(e){if([...document.body.classList].includes("search-active")&&3<d.value.trim().length&&(r=d.value.trim(),c=a.search(r,l),Array.isArray(c))&&0<c.length){var 
t=document.getElementById("results-list");t.replaceChildren();for(o=0;o<c.length;o++){var 
n=formatResultItem(c[o]);t.appendChild(n)}}})});
