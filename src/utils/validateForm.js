const validateEmail = email => {
	//Simple validation of email with regex, Source => https://ui.dev/validate-email-address-javascript/
	return /\S+@\S+\.\S+/.test(email);
};

const validateForm = values => {
	for (const value in values) {
		if (values[value] === '') {
			return { error: 'Por favor, Rellene los campos requeridos', field: value };
		}
	}

	if (!validateEmail(values.email)) {
		return { error: 'Por favor, Introduzca un E-mail valido' };
	}

	return { error: false };
};

export default validateForm;
