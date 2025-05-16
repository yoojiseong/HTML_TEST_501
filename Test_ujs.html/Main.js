        // const modal = document.querySelector('.modal');
        // const btnOpenModal=document.querySelector('.btn-open-modal');

        // btnOpenModal.addEventListener("click", ()=>{
        //     modal.style.display="flex";
        // });

const modal = document.querySelector('.modal');
const btn = document.getElementById('btn_profile')
btn.addEventListener('click', function (){
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
})