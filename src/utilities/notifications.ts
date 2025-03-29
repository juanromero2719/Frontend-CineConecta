import Swal from '@/config/notifications.config';

export const showSuccess = (title: string, message: string) => {
  Swal.fire({
    icon: 'success',
    title,
    text: message,
    showCancelButton: false,
    confirmButtonText: 'Aceptar'
  });
};

export const showError = (title: string, message: string) => {
  Swal.fire({
    icon: 'error',
    title,
    text: message,
    showCancelButton: false,
    confirmButtonText: 'Aceptar'
  });
};

export const showWarning = (title: string, message: string) => {
  Swal.fire({
    icon: 'warning',
    title,
    text: message,
    showCancelButton: false,
    confirmButtonText: 'Aceptar'
  });
};

export const showConfirm = (title: string, message: string): Promise<boolean> => {
  return Swal.fire({
    icon: 'question',
    title,
    text: message,
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No'
  }).then((result) => {
    return result.isConfirmed;
  });
};