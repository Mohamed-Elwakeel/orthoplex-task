import axios from "axios";
import { LoginEndpoint } from "./endPoints";

export async function loginUser(email, password) {
    try {
        const response = await axios.post(LoginEndpoint, {
            email,
            password,
        });

        // For successful response: { token: "QpwL5tke4Pnpja7X4" }
        const { token } = response.data;

        // Store token and email in localStorage
        localStorage.setItem("access_token", token);
        localStorage.setItem("user_email", email);

        return {
            success: true,
            message: "Login Successful",
        };
    } catch (error) {
        // Handle error coming from the API
        const errorMessage =
            error.response?.data?.error || error.message || "Something went wrong";
        throw new Error(errorMessage);
    }
}
