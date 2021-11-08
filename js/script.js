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


// -----------Hero sectinn parallex------------
function parallex(e){
	this.querySelectorAll('.layer').forEach(layer => {
		const speed = layer.getAttribute('data-speed')

		const x= (window.innerWidth - e.pageX*speed)/100;
		const y= (window.innerHeight - e.pageY*speed)/100;

		layer.style.transform = `translateX(${x}px) translateY(${y}px)`
	});
}
document.addEventListener('mousemove',parallex);