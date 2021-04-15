//Tombol show popup

document.querySelector(".popup1").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".main-page").style.display = "none";
});

// document.querySelector(".close").addEventListener("click", function () {
//   document.querySelector(".popup").style.display = "none";
// });

// Page Right

document.getElementById("okButton").addEventListener(
  "click",
  function () {
    document.querySelector(".cont-feature").style.display = "none";
    document.querySelector(".cont").style.display = "block";
  },

  false
);

document.getElementById("koButton").addEventListener(
  "click",
  function () {
    document.querySelector(".cont-feature").style.display = "block";
    document.querySelector(".cont").style.display = "none";
  },

  false
);
