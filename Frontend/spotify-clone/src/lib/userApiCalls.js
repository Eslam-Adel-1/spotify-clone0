export const handleUserSession = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_MESSAGES_URL}userSession`,
    {
      credentials: "include",
      method: "GET",
    }
  );

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result.user;
};

export const handleUserLogout = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}logout`, {
    credentials: "include",
    method: "POST",
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result.message;
};

export const handleChangeName = async (newName) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_USER_URL}changeName`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json", // Add this header
      },
      method: "POST",
      body: JSON.stringify({ newName }),
    }
  );
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result.message;
};

export const handleResetPassword = async ({ oldPassword, password }) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_USER_URL}resetPassword`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json", // Add this header
      },
      method: "POST",
      body: JSON.stringify({ oldPassword, newPassword: password }),
    }
  );
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result.message;
};

// -------- IMPORTANT NOTE -------- !!!!

// When the backend is made with EXPRESS.js
// and when you are calling api's from the frontend
// .. please don't forget to add credentials: "include"
// .. please don't forget to add headers: { "Content-Type": "application/json" }
// .. please don't forget to add method: "POST"
// .. please don't forget to add body: JSON.stringify(data)

export const handleProfileImage = async (data) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_USER_URL}profileImage`,
    {
      credentials: "include",

      // uploading a multipart/form-data doesn't need headers it will be handled automatically AND it will cause error later on if provided

      method: "POST",
      body: data,
    }
  );
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || result.message);
  }
  return result.image;
};
