const { auth } = require("../auth");

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

const apiClient = async (endpoint, options = {}) => {
  const session = await auth();

  const isProtectedEndpoint = endpoint.startsWith("/users");

  const headers = {
    "Content-Type": "application/json",
    ...(isProtectedEndpoint &&
      session && { Authorization: `Bearer ${session.accessToken}` }),
    ...options.headers,
  };

  const response = await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || response.statusText);
  }

  return response.json();
};

export default apiClient;
