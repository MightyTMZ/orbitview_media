import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ActivateAccount: React.FC = () => {
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const history = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/auth/users/activation/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uid, token }),
        });

        if (!response.ok) {
          throw new Error('Failed to activate account.');
        }

        setMessage('Your account has been activated successfully!');
        // Optionally redirect to the login page
        history('/login');
      } catch (error) {
        setMessage('Activation failed! Please try again.');
        console.error('Error activating account:', error);
      }
    };

    activateAccount();
  }, [uid, token, history]);

  return <div>{message}</div>;
};

export default ActivateAccount;
