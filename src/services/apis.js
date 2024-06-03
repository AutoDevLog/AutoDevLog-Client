const BASE_URL = process.env.REACT_APP_BASE_URL;

export const initGptRequestFormat = (issue, inference, solution) => {
  return {
      issue: issue,
      inference: inference,
      solution: solution
  };
}

export const initVelogPostFormat = (title, body, token) => {
  return {
    title: title,
    body: body,
    token: token
  }
}

export const sendGptRequestData = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/gpt/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // 주어진 양식에 맞게 데이터 구성
    });

    if (response.ok) {
      //console.log(response.text());
      return response.text();
    } else {
      throw new Error('Failed to send data');
    }
  } catch (error) {
    throw error;
  }
};

export const sendLoginData = async ( {userId, password} )  => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, password })
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

  export const sendVelogData = async ( email )  => {
    console.log(email);
    try {
      const response = await fetch(`${BASE_URL}/auth/link-velog-1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
  
      if (response.ok) {
        console.log("success!")
        return await email
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
      } else {
        console.log("error!")
        throw new Error('Failed to send data');
      }
    } catch (error) {
      throw error;
    }
  };

  export const postVelog = async (data) =>{
    try {
      const response = await fetch(`${BASE_URL}/blog/velog-post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // 주어진 양식에 맞게 데이터 구성
      });
  
      if (response.ok) {
        //console.log(response.text());
        return response.text();
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
      throw error;
    }
  }