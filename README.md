# 🧪 Cypress Testing Project

Title: This is the project for a social media web/mobile application. I used automation testing to cover functionalities, validations, responsiveness and API requests.

---

## ✅ Tech stack

Cypress, JS, REST API.


## ✅ Covered Features and testing objectives

- **Authentication**
  - Login (successful and unsuccessful scenarios) 
    Path: **cypress/e2e/login**
  - Logout 
    Path: **cypress/e2e/login**
  - Form validation errors (empty fields, invalid credentials) 
    Path: **cypress/e2e/unhappyPath**

- **Post Interactions**
  - Create regular and audio posts 
    Path: **cypress/e2e/post**
  - Like, comment, and delete posts 
    Path: **ccypress/e2e/post** and **Cypress/e2e/comments**
  - Dislike posts, delete comments
    Path: **cypress/e2e/post** and **Cypress/e2e/comments**

- **Responsiveness**
  - Some tests executed in the  Desktop viewport and some tests in the Mobile viewport 
    Path: **Cypress/e2e/posts/post-form-button-change**

- **Cross-browser support**
  - Scripts tested in: 
    - Chrome
    - Firefox
    - Edge

    Path: **package.json/scripts**
---

## 🌐 API Tests

Tested API requests for GET, POST, and DELETE methods for posts, comments, likes, and authentication scenarios. 

Path: **Cypress/API**

---
