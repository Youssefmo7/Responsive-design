let listItems = document.querySelectorAll(".information .info-list li");
listItems.forEach(item => {
    item.onclick = function() {
        listItems.forEach(it => {
            it.classList.remove('selected');
            document.querySelector(`.info-content .${it.dataset.class}`).style.setProperty("display", "none");
        })
        item.classList.add('selected');
        document.querySelector(`.info-content .${item.dataset.class}`).style.setProperty("display", "block");
    }
})
