export const getMessagesApi = async (userEmail, selectedUserEmail) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_MESSAGES_URL}getMessages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderEmail: userEmail,
        receiverEmail: selectedUserEmail,
      }),
    }
  );
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.messages;
};
