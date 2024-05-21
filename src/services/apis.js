const BASE_URL = process.env.REACT_APP_BASE_URL;

export const sendGptRequestData = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/gpt/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to send data');
    }
  } catch (error) {
    throw error;
  }
};

export const sendLoginData = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        return await response.json();
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
      throw error;
    }
  };