# Project Name 🏋️‍♂️

This project focuses on creating a Node.js API for handling users and gyms, enabling them to collaborate similar to the functionalities of Gympass.

## Functional Requirements 📋

- It should be possible to register ✅.
- It should be possible to authenticate 🔐.
- It should be possible to retrieve the profile of a logged-in user 🧑‍💼.
- It should be possible to obtain the number of check-ins performed by the logged-in user 🔢.
- It should be possible for the user to retrieve their check-in history 📅.
- It should be possible for the user to search for nearby gyms 🏢.
- It should be possible for the user to search for gyms by name 🔍.
- It should be possible for the user to check in at a gym ✅.
- It should be possible to validate a user's check-in ✔️.
- It should be possible to register a gym 🏟️.

## Business Rules 📝

- The user should not be able to register with a duplicate email 🚫.
- The user cannot perform 2 check-ins on the same day 🛑.
- The user cannot check in if they are not within 100m of the gym 🚷.
- Check-in validation is only possible within 20 minutes of creation ⏱️.
- Check-in validation can only be performed by administrators 👮.
- Gyms can only be registered by administrators 👮‍♂️.

## Non-functional Requirements ⚙️

- The user's password needs to be encrypted 🔒.
- Application data needs to be persisted in a PostgreSQL database 🗄️.
- All data lists need to be paginated with 20 items per page 📄.
- Users must be identified by a JWT 🔑.
