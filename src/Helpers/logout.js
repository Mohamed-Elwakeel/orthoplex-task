import { toast } from "react-toastify";

export const logout = (navigate) => {
    // Remove user data from localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");

    // Display success toast
    toast.success("Logged out successfully!");

    // Redirect to login page
    navigate("/login");
};
