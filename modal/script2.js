const dialog = document.getElementById("modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");

openBtn.addEventListener("click", () =>  {
    //dialog.showModal();
    dialog.show();
});

closeBtn.addEventListener("click", () =>  {
    dialog.close();
})




