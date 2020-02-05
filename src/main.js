import { Fibby} from './fibby.js';
import './scss/main.scss';
import $ from 'jquery';

var fibby = new Fibby();
$(document).ready(function() {

  //Click submit
  $('form').submit(function(event){
    event.preventDefault();
    var input = $('#input-1').val()
    fibby.ending = parseInt(input);
    fibby.makeEvenFib();
    printMe(fibby.evenFib);
  });

});

function printMe(arr) {
  var printString = [];

  arr.forEach(function(item){
    printString.push(
      '<div class="box">'+item+'</div>'
    );
  });

  $('.output').html(printString.join(''));
}