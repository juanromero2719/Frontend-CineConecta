import Swal from 'sweetalert2';

const swalConfig = {
    confirmButtonColor: 'rgb(var(--dark-blue-100))',
    cancelButtonColor: 'rgb(var(--dark-blue-100))',
    background: 'rgb(var(--dark-blue-100))',
    color: 'black',
    customClass: {
        confirmButton: 'swal2-confirm',
        cancelButton: 'swal2-cancel',
        title: 'swal2-title',
        htmlContainer: 'swal2-html-container',
    },
    buttonsStyling: true,
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
};

Swal.mixin(swalConfig);

export default Swal; 