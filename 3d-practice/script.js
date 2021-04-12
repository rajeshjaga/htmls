document.addEventListener('DOMContentLoaded',()=>{
	const container=document.getElementById('container');
	const card = document.querySelector('.card');
	const description=document.querySelector('.description h1');
	container.addEventListener('mousemove',e=>{
		let xAxis= (window.innerWidth/2-e.pageX)/25;
		let yAxis= (window.innerHeight/2-e.pageY)/25;
		card.style.transform=`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
	});
	container.addEventListener('mouseenter',()=>{
		description.style.transform='translateZ(500px)';
	});
	container.addEventListener('mouseleave',()=>{
		card.style.transform='rotateY(0deg) rotateX(0deg)';
		description.style.transform='translateZ(0px)';
	})
});