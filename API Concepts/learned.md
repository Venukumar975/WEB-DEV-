# **About API**

---

### **1. API**

Think of an **API** as a **bridge between your frontend and backend** — the frontend requests data from the backend.

**🍽️ Restaurant Analogy:**  
Imagine you just entered a restaurant and call the waiter for the menu.  
Here:
- **You** → the one requesting data (menu list of items)
- **Waiter (API)** → returns/provides the menu
- **Kitchen (Backend)** → where the actual data comes from

   Frontend ----- > API -----> Backend : *Requesting data from the backend*



---

### **2. API Endpoints**

**API endpoints** are specific parts (or paths) of an API.

For example:  
Suppose you have a base URL for a restaurant API that contains info about:
- Menu  
- Staff  
- Cooks  
- Opening and Closing times  

Now, if you don’t want all that info — just the **staff data** —  
you add `/staff` to the base URL:




---

### **3. Fetching API Data in JavaScript**

In JavaScript, we use the **`fetch()`** method to make an API request.  
It takes a URL as a parameter and **returns a Promise** (a special JavaScript object).

---

#### **🤔 Why a Promise and not the direct data?**

Let’s use an analogy:

**💼 Job Interview Analogy:**  
You give an offline or online interview and they say:  
> “We will contact you within a week.” — that’s a **Promise**.

Now:
- If they contact you → ✅ **Promise fulfilled/resolved**
- If they don’t → ❌ **Promise rejected**
- While you’re waiting → ⏳ **Promise pending**
- The time they took to process your interview performance and your knowledge before contacting you is called **pending state**
So, from this analogy, we understand 3 key states of a Promise:
- **Pending**
- **Resolved (Fulfilled)**
- **Rejected**

---

### **4. Example Code**

```js
const response = fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("There is an error:", error));

console.log("Running....");


The above code is simple first u send a requst to the server ---> it first returns a promise so to make this process asynchronous ( The remaining code Doesnt wait till the data is fetched For eg; if the fetching the data is taking more time then our "Running...." gets logged out since it is asynchronous it doesnt wait for the data ). *And if our request is resoled ( the data was obtained or present ) then we use .json() method for extracting our data / text from that response ( Note : The responcse contains all info about our data ( req ) , server code like 200 for okay and 500 for internal server error ) so we use json() to simply extract the required data fromt the response object* . And finally we log out the data using *console.log()* . And typically .then() is only executed if our request is *'resolved'* if not we will catch the errors and display them

   