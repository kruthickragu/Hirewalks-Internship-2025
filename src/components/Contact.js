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
    // Handle form submission logic here, e.g., sending data to an API
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.text}>Get in touch with our team for support or inquiries.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid rgb(252, 227, 138)',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '40px auto',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: 'black',
  },
  text: {
    color: 'black',
  },
  form: {
    marginTop: '20px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    display: 'block',
    color: 'black',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid rgb(252, 227, 138)',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid rgb(252, 227, 138)',
    height: '150px',
    resize: 'none',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'black',
    color: 'rgb(252, 227, 138)',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Contact;
