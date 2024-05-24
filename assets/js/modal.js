document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll(".btnClass3");
    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("modalContent");

    btns.forEach(function (btn, index) {
        btn.addEventListener("click", function () {
            var hoverContent = document.querySelectorAll(".mostrarHover")[index]
                .innerHTML;
            modalContent.innerHTML = hoverContent;
            modal.style.display = "block";
        });
    });

    var closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
});
