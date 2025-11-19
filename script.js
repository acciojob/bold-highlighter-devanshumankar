function highlight() {
    //Write your code here
	const link=document.querySelector("a");
	link.addEventListener("mouseover",()=>{
		const strongs=document.querySelectorAll("strong");
		strongs.forEach((strong)=>{
			strong.style.color="rgb(0, 128, 0)";
		})
	})

}
function return_normal() {
    //Write your code here
	const strongs=document.querySelectorAll("strong");
		strongs.forEach((strong)=>{
			strong.style.color="rgb(0,0,0)";
		})
    
}
