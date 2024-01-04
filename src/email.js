import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const App = () => {
  // Initialize EmailJS with your user ID
  emailjs.init("hwuEmjYnoSfnLvFdl");

  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');

  const addItemCart = () => {
    // Using the send method with EmailJS
    emailjs.send('service_icorah9', 'template_r44dm5w', {
      to_email: 'danielgodwin713@gmail.com',
      subject: 'New Item Added to Cart',
      item_name: item,
      item_price: price
    })
    .then(
      function (response) {
        console.log('Email Sent Successfully!', response);
        alert('Email Sent Successfully!');
      },
      function (error) {
        console.error('Email Not Sent', error);
        alert('Email Not Sent');
      }
    );

    // Clear input fields after sending email
    setItem('');
    setPrice('');
  };

  return (
    <div>
      <input 
        type='text'
        placeholder='Item'
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <input 
        type='number'
        placeholder='Enter number'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addItemCart}>ADD TO CART</button>
    </div>
  );
};

export default App;
