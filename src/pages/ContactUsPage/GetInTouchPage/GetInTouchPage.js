// Get In Touch page
import React, { useRef, useState } from 'react';

const GetInTouchPage = () => {
// defining useStste for the error and save
  const [isError, setIsError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // useReference for name email and message
  const getName = useRef('');
  const getEmail = useRef('');
  const getMessage = useRef('');

  // fuctionality for the handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name: getName.current.value,
      email: getEmail.current.value,
      message: getMessage.current.value
    };

    getName.current.value = '';
    getEmail.current.value = '';
    getMessage.current.value = '';

    fetch('http://localhost:5000/getInTouchData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        setIsSaved(true);
        setTimeout(() => {
          setIsSaved(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {});
  };

  return (
    <>
      {/* get the information from backend */}
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            {/* name input in the form */}
            <div className='mb-3'>
              <label htmlFor='nameInput' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='nameInput'
                name='fullName'
                ref={getName}
                required
              />
            </div>
             {/* email input in the form */}
            <div className='mb-3'>
              <label htmlFor='emailInput' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='emailInput'
                name='email'
                ref={getEmail}
                required
              />
            </div>
             {/* message input in the form */}
            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <textarea
                className='form-control'
                id='message'
                rows='4'
                name='message'
                ref={getMessage}
                required
              />
            </div>
             {/* send message button */}
            <button
              type='submit'
              className='btn btn-primary'
              data-testid='submitBtn'
              disabled={getName === ''}>
              Send Message
            </button>

            {isSaved ? (
              <div className='alert alert-success mt-3' data-testid='saved-state' >
                Saved Successfully
              </div>
            ) : (
              ''
            )}
            {isError ? (
              <div className='alert alert-danger'>Some Error Occurred. Try again Later!</div>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default GetInTouchPage;
