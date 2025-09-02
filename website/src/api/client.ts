const createApiClient = () => {
  //   const API_URL = "https://api.quantus.com/api";
  const API_URL = "http://localhost:5080/api";

  const methods = {
    contact: (name: string, email: string, message: string) =>
      fetch(API_URL + "/inquiries", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }),
    subscribe: (email: string) =>
      fetch(API_URL + "/waitlist", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email }),
      }),
  };

  return methods;
};

const apiClient = createApiClient();
export default apiClient;
