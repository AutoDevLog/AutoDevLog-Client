import Cookies from 'js-cookie';
const BASE_URL = process.env.REACT_APP_BASE_URL;



export const initLoginFormat = (id, password) =>{
  return {
    userId: id,
    password: password
  }
}

export const initGptRequestFormat = (issue, inference, solution) => {
  return {
      issue: issue,
      inference: inference,
      solution: solution
  };
}

export const initVelogPostFormat = (title, body) => {
  console.log(body)
  return{
    title: title,
    body: body
  }
}

export const initVelogPostFormatServerUpload = (title, hash) => {
  return{
    title: title,
    hashCode: hash
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
      //console.log(getCookieValue('article-hashcode'));
      console.log(Cookies.get('article-hashcode'));
      return response.text();
    } else {
      throw new Error('Failed to send data');
    }
  } catch (error) {
    throw error;
  }
};

export const sendLoginData = async ( data )  => {
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
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
      throw error;
    }
  };

  export const sendVelogData = async ( email )  => {
    //console.log(email);
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
        return await response
      } else {
        console.log("error!")
        throw new Error('Failed to send data');
      }
    } catch (error) {
      throw error;
    }
  };

  export const postVelog = async (data) =>{
    //console.log("postVelog:", localStorage.getItem('accessToken'));
    try {
      const response = await fetch(`${BASE_URL}/blog/velog-post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(data) // 주어진 양식에 맞게 데이터 구성
      });
  
      if (response.ok) {
        console.log(response);
        return response.text();
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
      throw error;
    }
  }

  export const postVelogServerUpload = async (data) =>{
    //console.log("postVelog:", localStorage.getItem('accessToken'));
    try {
      const response = await fetch(`${BASE_URL}/blog/velog-post-server-upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(data) // 주어진 양식에 맞게 데이터 구성
      });
  
      if (response.ok) {
        console.log(response);
        return response.text();
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
      throw error;
    }
  }

  export const sendLoginLink = async ( authUrl )  => {
    try {
      const response = await fetch(`${BASE_URL}/auth/link-velog-2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.accessToken}`
        },
        body: JSON.stringify({ authUrl })
      });
  
      if (response.ok) {
        console.log("apis success!")
        return await response
      } else {
        console.log("error!")
        throw new Error('Failed to send data');
      }
    } catch (error) {
      throw error;
    }
  };