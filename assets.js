//  Search In Table

function SearchTable(){
    var inputValue = document.getElementById("table-search-bar").value.toLowerCase();
    
    var TableBody  = document.getElementById("tablebody");

    var TableRows = TableBody.getElementsByTagName("tr");

    for(let i=0;i<TableRows.length ; i++){
        var TableData = TableRows[i].getElementsByTagName("td");
       // alert(TableData[1].innerHTML.toLowerCase());

        if(TableData[1].innerHTML.toLowerCase().indexOf(inputValue) == -1 && TableData[2].innerHTML.toLowerCase().indexOf(inputValue) == -1) {
            TableRows[i].style.display = "none";
        }
        else{
            TableRows[i].style.display = "";
        }
    }
}


function ConvertToExcel(){
    const table = document.getElementById('table');
    const html = table.outerHTML;
    window.open('data:application/vnd.ms-excel;base64,' + btoa(html));
}


/* Add Asset */
function AddAsset(){
    document.getElementById("AddAssetIntoTable").classList.add("container-box-open");
}

/*Delete Asset */
function DeleteAsset(){
    var AssetToDelete = document.getElementById("table-search-bar").value.toLowerCase();
    
}


/* Update Asset */
function UpdateAsset(){
    document.getElementById("UpdateAssetFromTable").classList.add("container-box-open");
}



function Insert(){
    var TableBody  = document.getElementById("tablebody");
    var TableLength = TableBody.getElementsByTagName("tr").length;
    
    var newrow = TableBody.insertRow(TableLength);

    
    
    var AssetName = document.getElementById("AddAssetType").value;
    var AssetLocation = document.getElementById("AddAssetLocation").value;
    var WRCount = document.getElementById("Add-wr-count").value;
    var NWNRCount = document.getElementById("Add-nwnr-count").value;
    var NWRCount = document.getElementById("Add-nwr-count").value;

    var newCell0 = newrow.insertCell(0).innerHTML = TableLength + 1;
    var newCell1 = newrow.insertCell(1).innerHTML = AssetName;
    var newCell2 = newrow.insertCell(2).innerHTML = AssetLocation;
    var newCell3 = newrow.insertCell(3).innerHTML = WRCount;
    var newCell4 = newrow.insertCell(4).innerHTML = NWNRCount;
    var newCell5 = newrow.insertCell(5).innerHTML = NWRCount;
    
    
    document.getElementById("AddAssetIntoTable").classList.remove("container-box-open");
}

function Cancel1(){
    document.getElementById("AddAssetType").value = "";
    document.getElementById("AddAssetLocation").value = "";
    document.getElementById("Add-wr-count").value = "";
    document.getElementById("Add-nwnr-count").value = "";
    document.getElementById("Add-nwr-count").value = "";
    document.getElementById("AddAssetIntoTable").classList.remove("container-box-open");
}
function Cancel2(){
    document.getElementById("UpdateAssetFromTable").classList.remove("container-box-open");
}