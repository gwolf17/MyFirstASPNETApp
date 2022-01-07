////document.getElementById("btnAdd").addEventListener("click", function () {
////    alert('"' + document.getElementById("title").value + '"' + ' is level: ' + document.getElementById("difficulty").value);
////})

$("#btnAdd").click(function () {
    alert('"' + $("#title").val() + '"'
        + ' is level: ' + $("#difficulty").val());

    $("#pianoimg").fadeToggle();
})  