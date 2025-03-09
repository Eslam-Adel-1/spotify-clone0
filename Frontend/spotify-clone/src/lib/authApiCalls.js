export const authApiCall = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name ? data.name : null,
        email: data.email ? data.email : null,
        password: data.password ? data.password : null,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

//-----------------------------------

export const verificationCodeApi = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      verificationCode: data.verificationCode ? data.verificationCode : null,
      email: data.email ? data.email : null,
    }),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
};

//-----------------------------------
