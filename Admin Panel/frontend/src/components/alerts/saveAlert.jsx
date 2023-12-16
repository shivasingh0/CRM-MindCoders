import Swal from "sweetalert2";
import "@fortawesome/fontawesome-free/css/all.css";

document.getElementById("saDialogThreeBtn") &&
  document
    .getElementById("saDialogThreeBtn")
    .addEventListener("click", function () {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: !0,
        showCancelButton: !0,
        confirmButtonText: "Save",
        confirmButtonClass: "btn btn-sm btn-success",
        cancelButtonClass: "btn btn-sm btn-danger",
        denyButtonClass: "btn btn-sm btn-info",
        buttonsStyling: !1,
        denyButtonText: "Don't save",
        showCloseButton: !0,
        closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
        customClass: {
          closeButton: "btn btn-sm btn-icon btn-danger",
        },
      }).then(function (t) {
        t.isConfirmed
          ? Swal.fire({
              title: "Saved!",
              icon: "success",
              confirmButtonClass: "btn btn-sm btn-primary",
              buttonsStyling: !1,
            })
          : t.isDenied &&
            Swal.fire({
              title: "Changes are not saved",
              icon: "info",
              confirmButtonClass: "btn btn-sm btn-primary",
              buttonsStyling: !1,
            });
      });
    });


 // ----------For use this alert

// import { showDialogThreeBtn } from "./sweetAlertUtil";  --->    { first import from here }

//  const handleButtonClick = async () => {        --->   { write this function }
//     await showDialogThreeBtn();
//   };

//  onClick={handleButtonClick}                ---> { call the function }

