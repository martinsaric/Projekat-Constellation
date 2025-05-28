# 🧪 Cypress Testing Project

Title: This is the project for a social media web/mobile application. I used automation testing to cover functionalities, validations, responsiveness and API requests.
Tech: Cypress, JS, REST API.

---

## ✅ Covered Features and testing objectives

- **Authentication**
  - Login (successful and unsuccessful scenarios) **Cypress/e2e/login**
  - Logout **Cypress/e2e/login**
  - Form validation errors (empty fields, invalid credentials) **Cypress/e2e/unhappyPath**

- **Post Interactions**
  - Create regular and audio posts **Cypress/e2e/post**
  - Like, comment, and delete posts **Cypress/e2e/post** and **Cypress/e2e/comments**
  - Dislike posts, delete comments **Cypress/e2e/post** and **Cypress/e2e/comments**

- **Responsiveness**
  - Some test executed in Desktop viewport and some tests in Mobile viewport 
  **Cypress/e2e/posts/post-form-button-change**

- **Cross-browser support**
  - Scripts tested in:
    - Chrome
    - Firefox
    - Edge

**package.json/scripts**
---

## 🌐 API Tests

Tested API requests for GET, POST, and DELETE methods for posts, comments, likes, and authentication scenarios. 

**Cypress/API**

---
