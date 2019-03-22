import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';

import Astro from './../src/astro';

$(document).ready(function() {
  $('#astro').submit(function(event) {
    event.preventDefault();

    let weight = parseInt($('#weight').val());
    let years = 2019 - parseInt(($('#date').val()).slice(0, 4));

    let user = new Astro(years, weight);

    $('#mercury').text(user.mercury().toFixed(2));
    $('#venus').text(user.venus().toFixed(2));
    $('#mars').text(user.mars().toFixed(2));
    $('#jupiter').text(user.jupiter().toFixed(2));

    $('#mercuryExp').text(user.lifeExpectancyMercury().toFixed(2));
    $('#venusExp').text(user.lifeExpectancyVenus().toFixed(2));
    $('#marsExp').text(user.lifeExpectancyMars().toFixed(2));
    $('#jupiterExp').text(user.lifeExpectancyJupiter().toFixed(2));


  });
});
