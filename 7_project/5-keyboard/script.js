window.addEventListener("keydown",(e)=>{
  let insert = document.querySelector("#data");
  insert.innerHTML = `<table>
  <tr>
    <th>Key</th>
    <th>keycode</th>
    <th>keyname</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`
})