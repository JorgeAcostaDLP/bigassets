async function getEmAll() {
  for (let i = 1; i < 800; i++) {
    await fetch(`https://fizal.me/pokeapi/api/v2/id/${i}.json`)
      .then(function(r) {
        return r.json();
      })
      .then(function(data) {
        document.getElementById('images').innerHTML += `
        <img class="target" src="${data.sprites.front_default}"  loading="lazy" alt="sprite">
      `;
      });
  }
}

getEmAll();
