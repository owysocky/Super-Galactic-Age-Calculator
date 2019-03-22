import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';

import Astro from './../src/astro';

$(document).ready(function() {
  $('#astro').submit(function(event) {
    event.preventDefault();

    let weight = $('#weight').val();
    let years = 2019 - parseInt(($('#date').val()).slice(0, 4));

    let user = new Astro(years, weight);

    $('#mercury').text(user.mercury());
    $('#venus').text(user.venus());
    $('#mars').text(user.mars());
    $('#jupiter').text(user.jupiter());

    $('#mercuryExp').text(user.lifeExpectancyMercury());
    $('#venusExp').text(user.lifeExpectancyVenus());
    $('#marsExp').text(user.lifeExpectancyMars());
    $('#jupiterExp').text(user.lifeExpectancyJupiter());


  });
});
