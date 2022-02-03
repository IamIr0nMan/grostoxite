import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        email: "",
        mobile: "",
        email: "",
        identification: "",
        address: "",
        accountNo: "",
        bankName: "",
        tradingBalance: "",
        password: "",
      });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

//   let name, value;
  const handleChange = e => {
    console.log(e);
    // name = e.target.name;
    const {name, value} = e.target
    // value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(user));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, user, errors };
};

export default useForm;