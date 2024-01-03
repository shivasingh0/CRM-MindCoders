import Swal from "sweetalert2";
import "@fortawesome/fontawesome-free/css/all.css";

export const deleteAlert = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    buttonsStyling: true,
    showCloseButton: true,
    closeButtonHtml: "<i class='fa-solid fa-xmark'></i>",
    customClass: {
      container: "custom-swal-container",
      confirmButton: "swal-confirm-btn",
      cancelButton: "swal-cancel-btn",
    },
  });

  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
      confirmButtonClass: "swal-confirm-btn",
      buttonsStyling: true,
    });
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error",
      confirmButtonClass: "btn btn-sm btn-primary",
      buttonsStyling: true,
    });
  }
};

// ----------For use this alert

// import { deleteAlert } from "../../components/alerts/deleteAlert";  --->    { first import from here }

//   const handleDelete = async () => {        --->   { write this function }
//     await deleteAlert();
//   };

// onClick={handleButtonClick}                 ---> { call the function }
