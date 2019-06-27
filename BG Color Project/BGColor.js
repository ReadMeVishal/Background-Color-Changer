var BtnChange = document.querySelector("#BtnChange");
var BGVal = document.querySelector("#BGVal");

BtnChange.addEventListener("click", function(){
	if(UInput.value !== ""){
		document.body.style.background = UInput.value;
		BGVal.textContent = UInput.value;
	}
}); 
