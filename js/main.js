let myapp = new Vue({
	el:'#aplicacion',
	data:{
		changemenu:'avanzadas',
	}
})

let navcatedra = document.getElementById('navcatedra');

window.addEventListener('scroll' , stopnav)

function stopnav(){
	// console.log(scrollY)348
	if(window.scrollY > 347){
		navcatedra.classList.add('stopnav')
	}else{
		navcatedra.classList.remove('stopnav')

	}
}


