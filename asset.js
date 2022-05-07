

/*
if(localStorage.getItem("themevalue")==1){
    document.body.classList.add("dark-theme");
    document.getElementById("sun-moon").setAttribute("class","fa-solid fa-sun");
    document.getElementById("sun-moon-mode").innerHTML = "Light";
}
else{
    document.body.classList.remove("dark-theme");
    document.getElementById("sun-moon").setAttribute("class","fa-solid fa-moon");
    document.getElementById("sun-moon-mode").innerHTML = "Dark";
}
*/
var asset = sessionStorage.getItem("maincontent");
document.getElementById("AssetType").innerHTML = asset;

/*

$(document).ready(function(){
    $("p").click(function(){
        alert("Click ME");
    });
});

*/
/*

$(function(){
    $("#header").load("header.html");
    $("#menubar").load("menubar.html");
});


*/


var WorkingCount = 10; 
var NotWorkingCount = 20;
var NotWorkingRepairableCount = 15;

var c1=0,c2=0,c3=0;
count1();
function count1(){
    if(c1 < WorkingCount){
        
        c1+=1;
        document.getElementById("counter0").innerText = c1;
        setTimeout(count1,100);
    }
}

count2();
function count2(){
    if(c2 < NotWorkingCount){
        
        c2+=1;
        document.getElementById("counter1").innerText = c2;
        setTimeout(count2,50);
    }
}
count3();
function count3(){
    if(c3 < NotWorkingRepairableCount){
        
        c3+=1;
        document.getElementById("counter2").innerText = c3;
        setTimeout(count3,50);
    }
}

/*
const assetCount = [];
assetCount.push(WorkingCount);
assetCount.push(NotWorkingCount);
assetCount.push(NotWorkingRepairableCount);

const ids = ["counter0","counter1","counter2"];


for(var i=0;i<assetCount.length;i++){
    let value = assetCount[i];
    let idname = ids[i];
    let counter = 0;
  //  console.log("Hello"+i);
    function update(){
        
        if(counter < value){
            console.log("Hello"+i);
            counter+=1;
          // console.log(counter);
            update();
        }
    }
    update();
}


// alert(document.getElementsByClassName("counter")[0].innerHTML);

*/
  

/*
var counter2 = 0;
count2();
function count2(){
    if(counter2 < 250){
        document.getElementById("count2").innerText = counter2;
        counter2+=1;
        setTimeout(count2,1);
    }
}

*/


// Lets Deal with Charts //




var Info = [WorkingCount,NotWorkingCount,NotWorkingRepairableCount];

const ctx = document.getElementById("AssetDistributionChart").getContext("2d");
const AssetChart = new Chart(ctx,{
    type : "bar",
    data : {
        labels : ["WR","NWNR","NWR"],
        datasets : [{
            data : Info,
            backgroundColor : ['rgba(77, 202, 115, 0.2)','rgba(255, 99, 132, 0.2)','rgba(255, 206, 86, 0.2)'],
            borderColor : ['rgba(77, 202, 115, 1)','rgb(193, 52, 80)','rgba(255, 206, 86, 1)'],
            borderWidth : 2,
            borderRadius : 5,
            hoverBackgroundColor : ['rgba(77, 202, 115, 0.6)','rgba(255, 99, 132, 0.6)','rgba(255, 206, 86, 0.6)'],
            
        }]
    },
    
    options : {
        scales: {
            y: {
                max : 25,
                ticks: {
                    color: 'grey'
                }
            },
            x: {
                ticks : {
                    color : 'grey'
                }
            }
        },
        responsive :  true,
        maintainAspectRatio : true,
        plugins : {
            title : {
                display : true,
                text : 'Asset Distribution',
                position : 'bottom',
                color : 'grey'
            },
            legend : {
                display :  false,
            }
        }
    }
})


/*

window.addEventListener('load',function(){
    this.alert('HE');
},false)

*/