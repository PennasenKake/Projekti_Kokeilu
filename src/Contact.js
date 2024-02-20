import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tässä voit käsitellä lomakkeen tiedot haluamallasi tavalla
    console.log('Form data submitted:', formData);
    // Voit lisätä tässä tarvittaessa lisätoimintoja, esim. ohjata käyttäjän kiitosviestiin
  };

  return (
    <div className="container-md">
      <h2 className="mt-5">Contact Us</h2>
      <p>This is the Contact page. You can contact us using the form below.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="message" className="col-sm-2 col-form-label">Message:</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
