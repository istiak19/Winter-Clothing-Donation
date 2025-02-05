# 🧣 Winter Clothing Donation  

**Winter Clothing Donation** is a user-friendly platform designed to help people donate winter clothing to underprivileged communities across Bangladesh. By connecting donors with local volunteers, the platform ensures that warm clothing reaches those in need during the harsh winter months. Users can browse ongoing campaigns, view details after logging in, and easily contribute through a donation form. This initiative fosters a sense of community and compassion by bringing warmth and hope to vulnerable populations.  

🔗 **Live Website:** [Winter Clothing Donation](https://winter-clothes-donation.netlify.app/)  

---

## 📌 Features  

✅ **User Authentication** – Login & Register using email/password or Google authentication.  
✅ **Donation Campaigns** – Browse all active campaigns and donate via a simple form.  
✅ **Profile Management** – Users can update their profile details.  
✅ **Real-time Toast Notifications** – Success and error messages displayed using toast notifications.  
✅ **Form Validation** – Error messages for incorrect inputs (e.g., password mismatch).  
✅ **Dynamic Page Titles** – Page titles update dynamically based on the current section.  

---

## 📜 Table of Contents  

- [Tech Stack](#-tech-stack)  
- [Dependencies](#-dependencies)  
- [Installation](#-installation)  
- [Usage Guide](#-usage-guide)  
- [Configuration](#-configuration)  
- [Development Commands](#-development-commands)  
- [Contributing](#-contributing)  
- [License](#-license)  

---

## 🛠 Tech Stack  

### **Frontend:**  
- **React** – Component-based UI framework  
- **React Router** – Navigation and routing  
- **Tailwind CSS & DaisyUI** – Modern and responsive styling  
- **Firebase** – Authentication and database  

---

## 📦 Dependencies  

- **Authentication:** Firebase  
- **UI Components:** DaisyUI, React Icons, Animate.css  
- **SEO Optimization:** React Helmet  
- **Animations:** AOS  
- **Notifications:** React Toastify  
- **Sorting & Filtering:** Match Sorter, Sort-by  

🔹 Full dependency list available in [`package.json`](package.json).  

---

## 📥 Installation  

1️⃣ Clone the repository:  
```sh
git clone https://github.com/istiak19/Winter-Clothing-Donation
cd WinterClothingDonation-client
```  

2️⃣ Install dependencies:  
```sh
npm install
```  

3️⃣ Start the development server:  
```sh
npm run dev
```  

---

## 🎯 Usage Guide  

- **Donors** → Browse campaigns, log in, and donate winter clothing.  
- **Volunteers** → Manage campaigns and ensure donations reach those in need.  
- **Admins** → Oversee donation campaigns and user management.  

💡 **Ensure Firebase credentials are configured in the `.env` file before running the project.**  

---

## 🔧 Configuration  

- **Firebase Setup** → Add Firebase credentials in `firebaseConfig.js`.  
- **Theme Customization** → Modify default theme settings in `tailwind.config.js`.  

---

## 🚀 Development Commands  

🔹 **Start Development Server:**  
```sh
npm run dev
```  

🔹 **Build for Production:**  
```sh
npm run build
```  

🔹 **Run Linter:**  
```sh
npm run lint
```  

🔹 **Preview Build:**  
```sh
npm run preview
```