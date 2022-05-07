// window.alert("HEllo World ");

// Dark Mode Implementation 

document.getElementById("dark-mode").onclick = function DarkMode(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        document.getElementById("sun-moon").setAttribute("class","fa-solid fa-sun");
        document.getElementById("sun-moon-mode").innerHTML = "Light";
        
    }
    else{
        document.getElementById("sun-moon").setAttribute("class","fa-solid fa-moon");
        document.getElementById("sun-moon-mode").innerHTML = "Dark";
        
    }
}

document.getElementById("aside-resize-btn").onclick = function ResizeAsideBar(){
    document.getElementById("aside-bar").classList.toggle("aside-resize");

    if(document.getElementById("aside-bar").classList.contains("aside-resize")){
        document.getElementById("collapse-expand").setAttribute("class","fa-solid fa-circle-arrow-right");
        document.getElementById("aside-resize-btn").classList.add("aside-resize-style");
     //   document.getElementById("aside-bar-logo").style.display = "none";
     document.getElementById("aside-bar-logo").style.visibility = "hidden";
      document.getElementById("all-tabs").classList.add("move-to-middle");

      const asideNames = document.getElementsByClassName("single-tab-name");
      for(var i=0;i<asideNames.length;i++){
            asideNames[i].style.visibility = "hidden";
        }   
        
    }
    else{
        document.getElementById("collapse-expand").setAttribute("class","fa-solid fa-circle-arrow-left");
        document.getElementById("aside-resize-btn").classList.remove("aside-resize-style");
     //   document.getElementById("aside-bar-logo").style.display = "block";
     document.getElementById("aside-bar-logo").style.visibility = "visible";
    document.getElementById("all-tabs").classList.remove("move-to-middle");
    
    const asideNames = document.getElementsByClassName("single-tab-name");
        for(var i=0;i<asideNames.length;i++){
            asideNames[i].style.visibility = "visible";
        }  
        
    }
}

document.getElementById("shrink").onclick = function ResizeAside(){
    document.getElementById("aside-bar").classList.toggle("aside-resize");
    

    if(document.getElementById("aside-bar").classList.contains("aside-resize")){
        document.getElementById("aside-resize-btn").classList.add("aside-resize-style");
      //  document.getElementById("aside-bar-logo").style.display = "none";
      document.getElementById("aside-bar-logo").style.visibility = "hidden";
        document.getElementById("collapse-expand").setAttribute("class","fa-solid fa-circle-arrow-right");

      document.getElementById("all-tabs").classList.add("move-to-middle");

      const asideNames = document.getElementsByClassName("single-tab-name");
      for(var i=0;i<asideNames.length;i++){
            asideNames[i].style.visibility = "hidden";
        }   
        
    }
    else{
        document.getElementById("aside-resize-btn").classList.remove("aside-resize-style");
    //    document.getElementById("aside-bar-logo").style.display = "block";
    document.getElementById("aside-bar-logo").style.visibility = "visible";
    document.getElementById("all-tabs").classList.remove("move-to-middle");
    document.getElementById("collapse-expand").setAttribute("class","fa-solid fa-circle-arrow-left");
    const asideNames = document.getElementsByClassName("single-tab-name");
        for(var i=0;i<asideNames.length;i++){
            asideNames[i].style.visibility = "visible";
        }  
        
    }
}


// slide - show 
let CurrentSlideIndex = 1;
let SlideLength = document.getElementsByClassName("dot").length;
ShowSlide(CurrentSlideIndex);
function NextSlide(n){
    CurrentSlideIndex = CurrentSlideIndex + n;
    if(CurrentSlideIndex > SlideLength)
    {
        CurrentSlideIndex = 1;
    }
    if(CurrentSlideIndex < 1)
    {
        CurrentSlideIndex = SlideLength; 
    }
    ShowSlide(CurrentSlideIndex);
}
function CurrentSlide(n){
    CurrentSlideIndex = n;
    ShowSlide(CurrentSlideIndex);
}


function ShowSlide(n){
    let slides = document.getElementsByClassName("assets-grid-view");
    let dots = document.getElementsByClassName("dot");

    for(let i=0;i<slides.length;i++)
    {
        slides[i].style.display = "none";
        dots[i].style.background = "#bbb";
    }
    slides[n-1].style.display = "grid";
    dots[n-1].style.background = "#6d6c6c"; 
} 
var indexes = [];
var content;
document.getElementById("racks-search-btn").onclick = function SearchRacks(){
    content = document.getElementById("racks-search-bar").value.toLowerCase();
    
    sessionStorage.setItem("maincontent",content);

    content = AddDelimiter(content);
    if(content == ''){
        window.alert("Enter Asset-details to Search");
    }
    else{
        
        var rack = document.getElementById("RackAB");
        var subracks = rack.getElementsByClassName("rack");
        for(var i=0;i<indexes.length;i++){
            subracks[indexes[i]].classList.remove("found-rack");
        }
        indexes = [];
        const locations=[];
        for(var i=0;i<subracks.length;i++){
            const RackNumber =  subracks[i].id;
            if(subracks[i].classList.contains(content)){
              //  subracks[i].classList.add("foundrack");
              //  window.alert(`Found Asset in Rack Number ${RackNumber}`);
                subracks[i].classList.add("found-rack");
                indexes.push(i);
                locations.push(' ' + RackNumber + ' ');
            }
        }
       // alert(locations);
    //    window.alert(indexes);
    content = RemoveDelimter(content);
  //  content[0] = content[0].toUpperCase();
        content = content[0].toUpperCase() + content.slice(1); 
    
        if(locations == ''){
            document.getElementById("search-info-button").style.display = "none"; 
            var msg = `${content} cannot be found `;
            document.getElementById("search-info-content").innerHTML = msg;
        //   window.alert(msg);
       /*     const para = document.createElement("p");
            const paracontent = document.createTextNode(msg);
            para.appendChild(paracontent);
            document.getElementById("search-info").appendChild(para);

            window.alert(document.getElementById("search-info").innerHTML);
            */     
        }
        else{
            var msg = `${content} can be found in racks numbered ${locations} `;
            document.getElementById("search-info-content").innerHTML = msg;
            document.getElementById("search-info-button").style.display = "inline"; 
            document.getElementById("search-info-button").innerHTML = ` View ${content} ?? `;
            
        //    window.alert(msg);
        /*
            const para = document.createElement("p");
            const paracontent = document.createTextNode(msg);
            para.appendChild(paracontent);
            document.getElementById("search-info").appendChild(para);

            window.alert(document.getElementById("search-info").innerHTML);
        */
            
        }
        subracks[i].classList.remove("found-rack");
        document.getElementById("racks-search-bar").value = '';
    }
}

function AddDelimiter(x){
    var t = x.replace(" ","-");
    return t; 
}
function RemoveDelimter(x){
    var t = x.replace("-"," ");
    return t;
}

function ClearSearchBar(){
    document.getElementById("racks-search-bar").value = '';
    document.getElementById("search-info-button").style.display = "none"; 
    document.getElementById("search-info-content").innerHTML = '';
    var rack = document.getElementById("RackAB");
    var subracks = rack.getElementsByClassName("rack");
    for(var i=0;i<indexes.length;i++){
        subracks[indexes[i]].classList.remove("found-rack");
    }
}

function AssetInfo(){
   // var AssetType = content;
    window.open('asset.html','_blank');
}



function Loadit(){
    var myVAr = setTimeout(Load,3000);
}

function Load(){
    document.getElementById("load").style.display = "none";
    document.getElementById("main").style.display = "block";
}