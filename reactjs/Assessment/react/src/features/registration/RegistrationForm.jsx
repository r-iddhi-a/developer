const validate = (values) => {
  const errors = {};
  if (values.name.length < 3) errors.name = "Minimum 3 characters";
  if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Invalid email";
  if (!/^\d{10}$/.test(values.phone)) errors.phone = "Phone must be 10 digits";
  return errors;
};
