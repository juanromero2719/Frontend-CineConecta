import { axiosInstance } from '@/../services/axiosInstance';
import { handleApiError } from '@/../utilities/handleApiError';
import Swal from 'sweetalert2';

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status) {
      handleApiError(error.response.status, error.response.data?.error);
    } else {
      Swal.fire('Sin conexión', 'Revisa tu internet o intenta más tarde.', 'error');
    }
    return Promise.reject(error);
  }
);
