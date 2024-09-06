url = "https://api.github.com/users/pragyan14"
const xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    if(xhr.readyState === 4 ) {
        const data = JSON.parse(this.responseText);
        document.querySelector("#userName").innerHTML = data.login;
        document.querySelector("#avatar").src = data.avatar_url;
    }
}
xhr.send();