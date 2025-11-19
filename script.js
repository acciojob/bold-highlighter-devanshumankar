function highlight() {
    //Write your code here
	const link=document.querySelector("a");
	link.addEventListener("mouseover",()=>{
		const strongs=document.querySelectorAll("strong");
		strongs.forEach((strong)=>{
			strong.style.color="green";
		})
	})

}
function return_normal() {
    //Write your code here
	const strongs=document.querySelectorAll("strong");
		strongs.forEach((strong)=>{
			strong.style.color="black";
		})
    
}
