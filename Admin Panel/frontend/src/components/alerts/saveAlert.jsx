// sweetAlertUtil.js
import Swal from "sweetalert2";
import "@fortawesome/fontawesome-free/css/all.css";

export const saveAlert = () => {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    confirmButtonClass: "btn btn-sm btn-success",
    cancelButtonClass: "btn btn-sm btn-danger",
    denyButtonClass: "btn btn-sm btn-info",
    buttonsStyling: false,
    denyButtonText: "Don't save",
    showCloseButton: true,
    closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
    customClass: {
      closeButton: "btn btn-sm btn-icon btn-danger",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Saved!",
        icon: "success",
        confirmButtonClass: "btn btn-sm btn-primary",
        buttonsStyling: false,
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: "Changes are not saved",
        icon: "info",
        confirmButtonClass: "btn btn-sm btn-primary",
        buttonsStyling: false,
      });
    }
  });
};
