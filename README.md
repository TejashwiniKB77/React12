React Authentication System with Lazy Loaded Profile Page

Features
•	Student registration with details stored in localStorage
•	Login using saved credentials
•	Protected Dashboard (only accessible after login)
•	Profile Page shows stored student details
•	Profile is lazy loaded using React.lazy() and Suspense
•	Direct access to protected pages is blocked
•	Logout removes user session and redirects to Login

Technologies Used
•	React JS
•	React Router v6
•	LocalStorage
•	CSS

How It Works 
 1. Signup
•	Student enters Name, Email, Phone, USN, Password
•	These details are saved in localStorage
•	User is redirected to Login

 3. Login
•	Student enters Email & Password
•	System checks localStorage for matching credentials
•	If correct → Redirect to Dashboard
•	If wrong → Show error message

 4. Protected Dashboard
•	Dashboard is visible only after login
•	If a user tries to open /dashboard directly, they are redirected to Login
•	Dashboard contains a Profile button

5. Lazy Loaded Profile Page
•	Profile page is loaded using:
•	const Profile = React.lazy(() => import("./Profile"));
•	It loads only when required, improving performance

•	Profile page shows all stored details:

o	Name
o	Email
o	Phone
o	USN
o	Password

 6. Protected Routes
•	Both Dashboard and Profile are protected
•	Without login → user is forced to Login Page
 
 7. Logout
 Removes login data from localStorage
•	Redirects back to Login Page

 Netlify Deployment
https://graceful-kataifi-ec1794.netlify.app/

