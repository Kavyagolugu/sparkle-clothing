import React, { useEffect, useState } from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import GetInTouchPage from './GetInTouchPage/GetInTouchPage';
import { fetchApi } from '../../utils/fetchApi';
// import GetInTouchPage from './GetInTouchPage/GetInTouchPage';

// contact us component starts here
const ContactUsPage = () => {
  const [contactUs, setContactUs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // after the initial rendering this callback function will be called

    fetchApi(
      'http://localhost:5000/contactData',
      'GET'
    )
      .then((resInJson) => {
        // capturing converted JSON res
        if (resInJson.status !== 404) {
          setContactUs(resInJson);
          setIsError(false);
        } else {
          setIsError(true);
        }
      })
      // catch block to catch the error
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // if is loading is true then the spinner will appear
  if (isLoading) {
    return <div className='spinner-border text-success'></div>;
  }

  // if is error is true then the alert danger will appear
  if (isError) {
    return <div className='alert alert-danger'>Some Error Occured. Try again later</div>;
  }

  return (
    <>
      {/* setting title for the contact us page using helmet set up */}
      <HelmetSetup title='Contact Us' />
      <div className='row mt-2'>
        <div className='col-md-6'>
          {/* after fetching displaying the contact us data */}
          <h1 data-testid='contact-us'>Contact Us Page</h1>
          <p data-testid='address'>Address: {contactUs.address}</p>
          <p data-testid='description'>HelpLine: {contactUs.description}</p>
          {/* font awsome icon for the phone */}
          <p>
            <i className='fa-solid fa-phone'></i> {contactUs.phone[0]}, {contactUs.phone[1]}
          </p>
          {/* font awsome icon for the email */}
          <p>
            <i className='fa-regular fa-envelope'></i> {contactUs.email}
          </p>
        </div>
        {/* calling the get in touch component */}
        <div className='col-md-6'>
          {/* <GetInTouchPage /> */}
          <GetInTouchPage/>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
