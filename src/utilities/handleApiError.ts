// handleApiError.ts

import Swal from 'sweetalert2';

export const handleApiError = (statusCode: number, serverMessage?: string) => {
  
  if (serverMessage) {
    Swal.fire('Error', serverMessage, 'error');
    return;
  }

  switch (statusCode) {
    case 400:
      Swal.fire('Solicitud incorrecta', 'Verifica los datos enviados.', 'warning');
      break;
    case 401:
      Swal.fire('No autorizado', 'Tu sesión ha expirado o es inválida.', 'error');
      break;
    case 403:
      Swal.fire('Prohibido', 'No tienes permisos para esta acción.', 'error');
      break;
    case 404:
      Swal.fire('No encontrado', 'Recurso no disponible o incorrecto.', 'info');
      break;
    case 500:
      Swal.fire('Error del servidor', 'Intenta más tarde.', 'error');
      break;
    default:
      Swal.fire('Error inesperado', 'Ocurrió un error no controlado.', 'error');
  }
};
