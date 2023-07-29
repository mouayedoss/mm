import Swal from "sweetalert2";
function showAlert() {
    Swal.fire({
      title: "es-tu sùr?",
      text: "Partie QCM termine! vous avez repondu a ",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Oui,continue!",
      cancelButtonText: "No,répéter",
    }).then((result) => {
      if (result.isConfirmed) {
       
        // User clicked the "Yes, delete it!" button
        // Delete the item
      } else if (result.isDenied) {
        // User clicked the "No, cancel" button
        // Do nothing
      }
    });
  }
  export default showAlert;