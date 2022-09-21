/* eslint-disable */
export const isRequired = (value: string) => !!value || "Este campo é obrigatório";

export const minLength = (minLength: number) => {
    return (value: string) =>
        value && minLength <= value.length || `Este campo deve conter no mínimo ${minLength} caracteres`
};

export const maxLength = (maxLength: number) => {
    return (value: string) =>
        value && maxLength >= value.length || `Este campo deve conter no maxímo ${maxLength} caracteres`
};

export const isValidEmail = (value: string) => {
    const regex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(value) || "Digite um e-mail válido";
}

export const isValidPassword = (v: string) => {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    return regex.test(v) || "Password must contain at least lowercase letter, one number, a special character and one uppercase letter";
}