const raitingContainer = document.querySelector(".rating");
let currentvalue = 0;

const limit = 10;


const html = Array.from(Array(limit)).map( (_, i)=>{
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

raitingContainer.innerHTML = html.join("");

document.querySelectorAll(".item").forEach(item=>{
    item.addEventListener("mouseover",e=>{
            const pos = item.getAttribute("data-pos");
            if(currentvalue === parseInt(pos)+1){
                return;
            }

            document.querySelectorAll(".item").forEach(it=>{
                if(it.classList.contains("item-full")){
                    it.classList.remove("item-full");
                }
            })

            for(let i=0;i<=pos;i++){
                    const square = document.querySelector(`.item-${i}`);
                    if(!square.classList.contains("item-full")){
                        square.classList.add("item-full");
                    }
            }

            currentvalue = parseInt(pos) + 1 ;
    })

    item.addEventListener("click",e=>{
        const pos = item.getAttribute("data-pos");
        currentvalue = parseInt(pos) + 1;
        console.log(currentvalue);
    });

})

