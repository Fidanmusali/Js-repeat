function validForm(value) {
    const error = {}
    if (!value.email.includes('@')) {
        error.email = ' enter the @'
    }
    if (!value.password.length < 6) {
        error.password = ' enter least 6 simbol'
    }
    return error
}