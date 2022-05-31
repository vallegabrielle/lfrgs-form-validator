
export default {
    name: 'cep',
    parameter: null,
    message: 'CEP inválido',
    async: false,
    fn: (value) => {

        var regex = /^[0-9]{5}-[0-9]{3}|[0-9]{8}$/;
        return regex.test(value)

    }
}
