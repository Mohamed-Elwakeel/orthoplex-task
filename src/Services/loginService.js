export async function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.setItem("isAuthenticated", "true");
            resolve({ success: true, message: "Login Successful" });
        }, 1000)
    })
}