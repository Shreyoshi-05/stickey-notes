const note = document.querySelector("textarea")
const btn = document.querySelector("button")
const bgcolour = document.querySelector("#bg")
const textcolour = document.querySelector("#text")
const rightDiv = document.querySelector(".right")


btn.addEventListener("click",createStikeynotes);

function createStikeynotes(){
    const text = note.value;
    if(text.length===0) return;

    const stickynotes = document.createElement("div")
    stickynotes.innerText = text;
    stickynotes.classList.add("note")
    
    const cross = document.createElement("span")
    cross.innerHTML = "&times;"
    cross.classList.add("close");
    cross.addEventListener("click", removeStickeyNotes);

    stickynotes.append(cross);

    stickynotes.style.backgroundColor = bgcolour.value;
    stickynotes.style.color = textcolour.value;

    rightDiv.append(stickynotes)

    note.value = "";
}



function removeStickeyNotes(e){
    e.target.parentElement.remove();
}

