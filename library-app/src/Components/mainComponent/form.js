// import React, { useState } from 'react';


// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     password: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let oldData = JSON.parse(localStorage.getItem('formData')) || [];
//     let newData = [...oldData, formData];
//     localStorage.setItem('formData', JSON.stringify(newData));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input type="password" id = "password" name="password" value={formData.password} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">SIGN UP</button>
//     </form>
//   );
// };

// export default MyForm;


import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let oldData = JSON.parse(localStorage.getItem('formData')) || [];
    const userExists = oldData.some(user => user.email === formData.email);
    
    if (userExists) {
      const existingUser = oldData.find(user => user.email === formData.email);
      alert(`Welcome back, ${existingUser.name}!`);
    } else {
      let newData = [...oldData, formData];
      localStorage.setItem('formData', JSON.stringify(newData));
      alert('New user registered successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
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
      </div>
      <button type="submit">SIGN UP</button>
    </form>
  );
};

export default MyForm;
