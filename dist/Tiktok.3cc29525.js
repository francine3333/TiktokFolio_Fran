let suggestedAccBlock=document.querySelectorAll(".suggested-acc-block");class User{constructor(e,t,s,o,r){this.id=e,this.name=t,t=t.toLowerCase(),this.userName=t.replaceAll(" ",""),this.verified=s,this.src=o,this.story=r}}var user1=new User(1,"Gamer Girl","none","picture/dp.png",!0),user2=new User(2,"Noyam Jingo","none","picture/dp.png",!0),user3=new User(3,"Huwan Girl","verified","picture/dp.png",!1),user4=new User(4,"Rage NOma","none","picture/dp.png",!0),users=[user1,user2,user3,user4];let codeBlock=" ";for(let i=0;i<users.length;i++){console.log(users[i].id);var e=users[i];addCodeBlocktoSite(codeBlock+=`
        <li>
            <a href="#">
            <div>
                <img
                src="${e.src}"
                class="profile-image"
                alt=""
                data-story="${e.story}"
                />
                <div>
                <h3 class="${e.verified}">${e.userName}</h3>
                <h5>${e.name}</h5>
                </div>
            </div>
            </a>
    </li>`,i)}function addCodeBlocktoSite(e,t){""!=e&&t==users.length-1&&(suggestedAccBlock[0].insertAdjacentHTML("beforeend",e),suggestedAccBlock[1].insertAdjacentHTML("beforeend",e))}function activeClassControll(e){let t=parseInt(e.parentNode.children[1].innerText);e.classList.toggle("active"),"active"==e.classList[2]?e.parentNode.children[1].innerText=t+1:e.parentNode.children[1].innerText=t-1}document.getElementById("category-dropdown").addEventListener("change",function(){let e=document.querySelectorAll(".video-container");e.forEach(e=>e.style.display="none");let t=this.value;console.log("Selected Value:",t),"all"===t?e.forEach(e=>{console.log("Showing all items"),e.style.display="block"}):e.forEach(e=>{let s=e.getAttribute("data-category");console.log(`Item category: ${s}, Selected value: ${t}`),s===t&&(console.log(`Showing item with category: ${s}`),e.style.display="block")})});
//# sourceMappingURL=Tiktok.3cc29525.js.map
