const area = document.getElementById("area");

area.addEventListener("input", function() {
    const words = area.value.split(" ");

    localStorage.setItem("words", JSON.stringify(words));
});