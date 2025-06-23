
# CLEANER - Smart Waste Management Platform

**CLEANER** is a comprehensive, responsive web application designed to simplify and digitize the entire waste management process — from scheduling residential pickups to managing commercial waste, renting dumpsters, processing payments, and more.

---

## 🌍 Project Overview

This platform enables users to:
- Book **residential**, **commercial**, and **dumpster** waste services
- View available time slots on a **calendar**
- Submit **feedback**
- Make **secure payments**
- Learn about **waste types**
- Read about the **company**, its team, and mission
- Use a multilingual interface with **language switcher**
- Interact with **login/signup modals** and a **chat-style AI help system**

---

## 🗂️ Project Structure

```
📁 CLEANER/
├── index.html                 # Home page (scrollable with modals and AI chat)
├── about.html                 # About the company + contact form
├── calendar.html              # Interactive calendar to schedule pickups
├── commercial.html            # Form for business/commercial waste requests
├── dumpster.html              # Dumpster rental form with validations
├── residential.html           # Residential waste pickup booking
├── feedback.html              # Feedback form and testimonials
├── payment.html               # Secure payment submission page
├── waste-types.html           # Info cards for waste categories

📁 styles/
├── about.css                  # About page styling
├── calendar.css               # Calendar layout
├── feedback.css               # Feedback form styles
├── residencial_commercial_dumper.css  # Shared layout for core pages
├── waste-types.css            # Waste-type cards layout

📁 scripts/
├── about.js                   # Form handling, nav toggle
├── calendar.js                # Calendar generation, slot selection
├── commercial.js              # Form validation, animations
├── dumpster.js                # Validations, pricing, restrictions
├── residential.js             # Residential booking logic
├── feedback.js                # Modal feedback submission
├── payment.js                 # Card validation, form feedback
├── script.js                  # Main page: modal handling, language, AI bot
```

---

## 🔑 Features by Page

### ✅ **index.html**
- Hero CTA
- Services showcase
- Language switcher (English, Hindi, Bengali)
- AI Help Chat Modal
- Login / Signup / Forgot Password modals

### ✅ **about.html**
- Mission, vision, team
- Contact form with live validation
- Animated sections on scroll

### ✅ **calendar.html**
- Full calendar with interactive date picking
- Dynamically generated time slots
- Modal-based booking confirmation

### ✅ **residential.html**
- Residential waste pickup booking form
- Waste type dropdown, pickup date, notes
- Animated feature cards
- Modal confirmation

### ✅ **commercial.html**
- Full commercial booking with type, address, waste volume
- Weekly, daily pickup frequency
- Modal confirmation
- Form input validations (email/phone)

### ✅ **dumpster.html**
- Rental form for 10/20/30 yard dumpsters
- Validates rental days by size
- Price estimation based on selection
- Scroll-in animations

### ✅ **waste-types.html**
- Grid layout of waste categories (Plastic, E-Waste, Hazardous, etc.)
- Educational descriptions and item lists

### ✅ **payment.html**
- Secure payment form with:
  - Account number
  - Card + expiry/CVV validation
  - Email receipt
- Visual confirmation modal

### ✅ **feedback.html**
- Collects user ratings, comments, and recommendations
- Real-time testimonial section
- Modal confirmation on submit

---

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Debknata715/cleaner-waste-app.git
cd cleaner-waste-app
```

2. Open any `.html` file in your browser  
or  
Use Live Server (VS Code extension) for full interactivity

---

## 🧠 Tech Stack

- HTML5, CSS3 (Grid, Flexbox, Animations)
- JavaScript (Vanilla JS, DOM API)
- Font Awesome for icons
- Responsive Design (Media Queries)
- No frameworks used — fully custom

---

## 🔒 Form & Input Validation

- Phone number: numeric, 10 digits
- Email: Regex-based pattern
- Dates: Block past days
- Dumpster: Max duration by type (7/14/30)
- Payment: Card format, expiry, CVV

---

## 💬 Contact

📧 Email: debkantadey29@gmail.com  


---

Website link:-https://cleaner-one.vercel.app/



project View 

![image](https://github.com/user-attachments/assets/216771b9-4b3e-4cbf-b33a-233c695a844b)

![image](https://github.com/user-attachments/assets/a64085d3-08bc-4da6-842c-a9b6703d87d8)


![image](https://github.com/user-attachments/assets/0028b095-4029-43e2-a924-dd7dff4820bd)





