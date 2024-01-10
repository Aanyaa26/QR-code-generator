function GenerateQR() {
    var qrImage = document.getElementById("qrImage");
    var qrText = document.getElementById("qrText").value;
  
    if (qrText.trim() !== "") {
      qrImage.style.display = "block"; // Show the image
      qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        encodeURIComponent(qrText);
    } else {
      alert("Please enter text for the QR code.");
      qrImage.style.display = "none"; // Hide the image if no text
    }
  }
  
  // Add event listener for Enter key
  document.getElementById("qrText").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      GenerateQR();
    }
  });
  









// function GenerateQR() {
//     var qrImage = document.getElementById("qrImage");
//     var qrText = document.getElementById("qrText").value;
  
//     if (qrText.trim() !== "") {
//       qrImage.style.display = "block"; // Show the image
//       qrImage.src =
//         "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
//         encodeURIComponent(qrText);
//     } else {
//       alert("Please enter text for the QR code.");
//       qrImage.style.display = "none"; // Hide the image if no text
//     }
//   }
  




// function GenerateQR() {
//     var qrImage = document.getElementById("qrImage");
//     var qrText = document.getElementById("qrText").value;
  
//     if (qrText.trim() !== "") {
//       qrImage.src =
//         "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
//         encodeURIComponent(qrText);
//     } else {
//       alert("Please enter text for the QR code.");
//     }
//   }
  


// function GenerateQR() {
//     var qrImage = document.getElementById("qrImage");
//     var qrText = document.getElementById("qrText").value;
  
//     if (qrText.trim() !== "") {
//       qrImage.src =
//         "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
//         encodeURIComponent(qrText);
//     } else {
//       alert("Please enter text for the QR code.");
//     }
//   }
  


// function GenerateQR() {
//     console.log("QR Text: ", qrtext.value);
//     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
// }

   
   
   
   
   // let imgBox = document.getElementById("imgBox");
    // let qrImage = document.getElementById("qrImage");
    // let qrtext = document.getElementById("qrText");

    // function GenerateQR(){
    //     qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.value;
    // }
        
