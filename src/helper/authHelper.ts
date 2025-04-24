const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface RequestOptions {
  endpoint: string;
  method: string;
  body?: object;
  token?: string;
  IdToken?: string;
}

class AuthHelper {
  private apiUrl: string;

  constructor() {
    if (!apiUrl) {
      throw new Error("API base URL is not defined in the environment variables.");
    }
    this.apiUrl = apiUrl;
  }

  private getHeaders(token?: string, IdToken?: string): HeadersInit {
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(IdToken && { "x-id-token": IdToken }),
    };
  }

  public async ApiRequest({
    endpoint,
    method,
    body,
    token,
    IdToken,
  }: RequestOptions): Promise<{ success: boolean; data?: any; message?: string }> {
    try {
      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        method,
        headers: this.getHeaders(token, IdToken),
        body: body ? JSON.stringify(body) : undefined,
      });
      const contentType = response.headers.get("content-type");
      if (
        contentType &&
        contentType.includes("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
      ) {
        const blob = await response.blob();
        return { success: response.ok, data: blob as any };
      }

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Request failed");
        }
        return { success: true, data };
      }

      const text = await response.text();
      console.error("Expected JSON but received:", text.slice(0, 300));
      return { success: false, message: "Received non-JSON response" };

    } catch (error: any) {
      return { success: false, message: error.message };
    }
  }
}

export default new AuthHelper();


export const getAuthTokens = () => {
  const token = localStorage.getItem("token") || "";
  const idToken = localStorage.getItem("IdToken") || "";
  return { token, idToken };
};