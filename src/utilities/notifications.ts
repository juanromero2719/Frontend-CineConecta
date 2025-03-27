import Swal from "sweetalert2";

export const showSuccess = (title: string, message: string) => {
    Swal.fire({
      icon: 'success',
      title,
      text: message,
    });
  };