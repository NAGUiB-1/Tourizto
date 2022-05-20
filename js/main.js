let but_hd = document.getElementsByClassName("button-hd")[0];
but_hd.onclick = function () {
    document.getElementById("list").classList.toggle("toggeld");
    this.classList.toggle("change");
}
