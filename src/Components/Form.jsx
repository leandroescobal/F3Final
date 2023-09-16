import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
    genericError: '',
  });

  const [formSuccess, setFormSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    // Validaciones
    let isValid = true;
    const errors = {
      nameError: '',
      emailError: '',
      genericError: '',
    };

    if (name.length < 5) {
      isValid = false;
      errors.nameError = 'El nombre debe tener al menos 5 caracteres.';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      errors.emailError = 'Ingrese una dirección de correo electrónico válida.';
    }

    if (!isValid) {
      setFormErrors(errors);
      setFormSuccess('');
    } else {
      console.log('Formulario enviado:', formData);
      setFormErrors({
        nameError: '',
        emailError: '',
        genericError: '',
      });
      setFormSuccess(`Gracias ${name}, te contactaremos cuanto antes vía mail.`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="custom-form">
      <h2>Formulario Personalizado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre Completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="error">{formErrors.nameError}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{formErrors.emailError}</p>
        </div>
        <button type="submit">Enviar</button>
        <p className="error">{formErrors.genericError}</p>
        <p className="success">{formSuccess}</p>
      </form>
    </div>
  );
}

export default Form;