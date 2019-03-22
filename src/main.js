import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';

import Astro from './../src/astro';

$(document).ready(function() {
  $('#astro').submit(function(event) {
    event.preventDefault();

    let years = 2019 - parseInt(($('#date').val()).slice(0, 4));
    let weight = parseInt($('#kg').val());

    let user = new Astro(years, weight);

    $('#mercury').text(user.mercury().toFixed(2));
    $('#venus').text(user.venus().toFixed(2));
    $('#mars').text(user.mars().toFixed(2));
    $('#jupiter').text(user.jupiter().toFixed(2));

    $('#mercuryExp').text(user.lifeExpectancyMercury().toFixed(2));
    $('#venusExp').text(user.lifeExpectancyVenus().toFixed(2));
    $('#marsExp').text(user.lifeExpectancyMars().toFixed(2));
    $('#jupiterExp').text(user.lifeExpectancyJupiter().toFixed(2));

    $('#mercuryWght').text(user.mercuryGravity().toFixed(2));
    $('#venusWght').text(user.venusGravity().toFixed(2));
    $('#marsWght').text(user.marsGravity().toFixed(2));
    $('#jupiterWght').text(user.jupiterGravity().toFixed(2));

    if(user.lifeExpectancyMercury()<=0 || user.lifeExpectancyVenus()<=0 || user.lifeExpectancyMars()<=0 || user.lifeExpectancyJupiter()<=0){
      $("#hide").hide();
      $("#show").show();
    }
  });
});
