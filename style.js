const searchWrapper = document.querySelector(".search-input")
const inputBox = searchWrapper.querySelector("input")
const suggBox = searchWrapper.querySelector(".autocom-box")

inputBox.onkeyup = (e) => {
    let userdata = e.target.value;
    let emptyArray = [];
    if (userdata) {
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = `<li>` + data + `</li>`
        })

        searchWrapper.classList.add("active");
        showSugg(emptyArray);

        let suggestionLists = suggBox.querySelectorAll("li");
        for (let i = 0; i < suggestionLists.length; i++) {
            suggestionLists[i].setAttribute("onclick", "select(this)")


        }
    } else {
        searchWrapper.classList.remove("active");
    }


}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}

function showSugg(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value
        listData = `<li>` + userValue + `</li>`
    } else {
        listData = list.join("");

    }

    suggBox.innerHTML = listData
}