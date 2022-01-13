$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let hero = $("#superhero").val();

    if (/[a-z]/gi.test(hero)) {
      alert("Debes ingresar un numero");
    } else {
      $.ajax({
        url: `https://superheroapi.com/api.php/443246354011480/${hero}/`,
        method: "GET",
        dataType: "json",

        success: function (result) {
          console.log(result);
          let nombre = result.name;
          let foto = result.image["url"];

          $("#pantalla").html(`
            <div class="card" >
              <img src="${foto}" class="card-img-top" alt="...">
              <h2 class="card-title">${nombre}</h2>
            </div>
          `);

          const stats = []

          result.powerstats.forEach( function(s) {
            estadisticas.push({
              label: s.powerstats,
              y: s.
            })
          })

          let config = {
            animationEnabled: true,
            title: {
              text: "Estadisticas",
            },
            axisY: {
              title: "Valor",
            },
            data: [
              {
                type: "piechart",
                dataPoints: powerStats
              }
            ],
          };

        },
      });
    }
  });
});

// <img src="${foto}" alt="foto de pokemon" style="width:200px; height:200px; padding:0;">
