import Swal from 'sweetalert2';

const swalConfig = {
    confirmButtonColor: 'rgb(var(--dark-latte))',
    cancelButtonColor: '#d33',
    background: 'rgb(var(--light-latte))',
    color: 'rgb(var(--dark-latte))',
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