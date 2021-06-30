function addHeroZitus() {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=733952380772679763&permissions=0&scope=bot';
    document.getElementById("server-ct").innerHTML = `Servers ${data}`
}

var jsonData;
var objData;

fetch('https://herozitus.herokuapp.com/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById('server-ct').innerHTML = (Math.round(JSON.parse(data).servers * 100) / 100).toLocaleString();
    document.getElementById('member-ct').innerHTML = (Math.round(JSON.parse(data).globalMemberCt * 100) / 100).toLocaleString();
  });

  console.log(jsonData);