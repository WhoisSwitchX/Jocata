function showAdditionalFields() {
    var selectBox = document.getElementById("allRequestType");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    // Hide all additional data sections first
    document.getElementById("additionalDataCreation").style.display = "none";
    document.getElementById("additionalDataModification").style.display = "none";
    document.getElementById("additionalDataDeletion").style.display = "none";
    // Display the relevant section based on the selection
    if (selectedValue === "creation") {
        document.getElementById("additionalDataCreation").style.display = "block";
    } else if (selectedValue === "modification") {
        document.getElementById("additionalDataModification").style.display = "_blank";
    } else if (selectedValue === "deletion") {
        document.getElementById("additionalDataDeletion").style.display = "_blank";
    }
 }

 function showAdditionalFields() {
    var selectBox = document.getElementById("allRequestType");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    // Check if "Creation" / "Modification" is selected
    if (selectedValue === "creation") {
      document.getElementById("additionalData").style.display = "_blank";
    } else if (selectedValue === "modification") {
      window.open("AspectModification.html", "_blank");
      selectBox.selectedIndex = 0;
    } 
    else if  (selectedValue === "deletion") {
            window.open("AspectDeletion.html", "block");
            selectBox.selectedIndex = 0; 
        }
        else {
    }
  }

  function showAdditionalFields() {
    var selectBox = document.getElementById("allRequestType");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    // Check if "Creation" / "Modification" is selected
    if (selectedValue === "creation") {
      document.getElementById("additionalData").style.display = "_blank";
    } 
    else if (selectedValue === "modification") {
      window.open("AspectModification.html", "block");
      selectBox.selectedIndex = 0;
    } 
    else if (selectedValue === "deletion") {
      window.open("AspectDeletion.html", "_blank");
      selectBox.selectedIndex = 0;
    } 
    else {
    }
  }


