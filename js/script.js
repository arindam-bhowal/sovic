//------------- Pre-loader ------------------
window.addEventListener('load',()=>{
	let preloader= document.querySelector('#preloader')
	preloader.classList.add('loaded')
})



// ----- HamBurger icon Click ------
function navIconClick(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");	
	document.getElementById("menu-bg").classList.toggle("change-bg");
	document.querySelector('.sectionAfterNav').classList.toggle('opac')
}


// -----------Hero section parallex------------
function parallex(e){
	this.querySelectorAll('.layer').forEach(layer => {
		const speed = layer.getAttribute('data-speed')

		const x= (window.innerWidth - e.pageX*speed)/100;
		const y= (window.innerHeight - e.pageY*speed)/100;

		layer.style.transform = `translateX(${x}px) translateY(${y}px)`
	});
}
document.addEventListener('mousemove',parallex);


//--------------------- Gallery Section ----------------
function shiftLeft() {
    const boxes = document.querySelectorAll(".galleryContainer .box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 5) {
            tmpNode.classList.add("box--hide");
            boxes[5].className = "box move-to-position5-from-left";
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";
        boxes[3].className = "box move-to-position3-from-left";
        boxes[4].className = "box move-to-position4-from-left";
        boxes[0].remove();

        document.querySelector(".cards__container").appendChild(tmpNode);

    }, 500);

}

function shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[4].className = "box move-out-from-right";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 4) {
            boxes[4].className = "box box--hide";
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position1-from-right";
        boxes[0].className = "box move-to-position2-from-right";
        boxes[1].className = "box move-to-position3-from-right";
        boxes[2].className = "box move-to-position4-from-right";
        boxes[3].className = "box move-to-position5-from-right";
    }, 500);

}