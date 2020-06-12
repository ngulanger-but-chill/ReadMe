# Books Apps

**Register User**
---

    Register a User

* **URL**

    /register

* **METHOD**

    `POST`

*  **URL Params**

    **Required**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "id": 1,
        "email": "tes@mail.com"
    }
    ```
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Email Already Exist" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Sign In**
----
  Login a user.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

    **Required**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNAbWFpbC5jb20iLCJpYXQiOjE1OTE4OTkzNTl9.LAETq6ayw6cd_dGy1I-VsDbQcdnZxwxGCh0y3picOqA"
    }       
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "Email / Password are incorrect" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

