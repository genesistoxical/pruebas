// client-side js

function restart() {
  location.reload();
}

function wait() {
  document.getElementById("form").style.display = "none";
  document.getElementById("details-main").style.display = "none";
  document.getElementById("details-wait").style.display = "block";
  document.getElementById("link-wait").style.display = "block";
  document.getElementById("link-main").style.display = "none";
  document.getElementById("loading").style.display = "block";
}

function activatebtn() {
  document.getElementById("convert").disabled = false;
}