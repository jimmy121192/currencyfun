// var currencies = ['EUR', 'USD', 'GBP', 'JPY', 'AUD', 'CHF', 'VND', 'CAD'];




//Live update amounts
// $('.amount').bind('keyup', function() {
//   updateAmounts();
// });
var d = new Date();
var bar = document.getElementById("bar");
var advise = document.getElementById("advise");
var his = document.getElementById("history");
var container = document.getElementById("container");
var cur = document.getElementsByName("curr_amount");
var adv = document.getElementById("adv");
var usd = document.getElementById("USD");
var eur = document.getElementById("EUR");
var table = document.getElementById("table");
var convert = document.getElementById("convert");
var wrap = document.getElementById("wrapper");
bar.addEventListener("click", function(){
createbar()
})

his.addEventListener("click", function(){
  wrap.style.display ="none";
  table.style.display ="block";
  document.getElementById('myChart').style.display ="none";
  document.getElementById('adv').style.display ="none";

})
;
convert.addEventListener("click", function(){
  wrap.style.display ="block";
  table.style.display ="none";
  document.getElementById('myChart').style.display ="none";
  document.getElementById('adv').style.display ="none";

})
advise.addEventListener("click", function(){
createadv()
})
var arrItems = [];



$(document).ready(function(){
    $.getJSON("rates.json", function (data) {
                 // THE ARRAY TO STORE JSON ITEMS.
            $.each(data, function (index, value) {
                arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
            });

  	$('.CAD').click(function() {

    		
    		var userInput = $('.amount').val() || 0;
      		// console.log(arrItems[0].name);
      		for (var i = 0; i < arrItems.length; i++) {
    		var amount = userInput * arrItems[i].rate;
    		$('#' + arrItems[i].name).text(Number(amount).toFixed(2));
    		}
  		});
	});



	//Live update amounts
	$('.amount').bind('keyup', function() {
 	   var userInput = $('.amount').val() || 0;
      		for (var i = 0; i < arrItems.length; i++) {
    		var amount = userInput * arrItems[i].rate;
    		$('#' + arrItems[i].name).text(Number(amount).toFixed(2));
    		}
	});
});

function createadv(){
  document.getElementById('myChart').style.display ="none";
  document.getElementById('adv').style.display ="block";
  table.style.display ="none";
  wrap.style.display ="none";
  adv.innerHTML = d.toDateString() + "<br><p>The price of USD is decreased. This is a good time to buy USD.</p>"
}





function createbar(){
document.getElementById('myChart').style.display ="block";
document.getElementById('adv').style.display ="none";
table.style.display ="none";
wrap.style.display ="none";
let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['EUR', 'USD', 'GBP', 'JPY', 'AUD', 'CHF', 'VND'],
        datasets:[{
          label:'Exchange Rate',
          data:[
            1.53915,
            1.28735,
            1.74757,
            0.01172,
            0.96491,
            1.28904,
            0.00006
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 129, 64, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Exchange Rates on ' + d.toDateString(),
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }

        },
        tooltips:{
          enabled:true
        }
      }
    });
}    