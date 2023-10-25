let modalEle = document.querySelector(".modal");
let modalImage = document.querySelector(".modalImage");
let width = document.documentElement.clientWidth;
document.querySelector(".close").addEventListener("click", () => {
  modalEle.style.display = "none";
  topButton.style.display = "block";
});

if(width > 500){
  Array.from(document.querySelectorAll(".ImgThumbnail")).forEach((item) => {
    item.addEventListener("click", (event) => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
    });
  });
}else{
  
};