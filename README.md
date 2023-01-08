### SERVER-SIDE INFORMATION FOR THIS PROJECT

**Built with**

1. Node.js
2. Express.js
3. PostgreSQL

**Libraries/Packages Used**

1. dotenv - Used to hide secret token key for the generation of JSON Web Tokens.
2. pg - Non-blocking PostgreSQL client for Node.js.
3. cors - Express middleware.
4. jsonwebtoken - For the generation, and verification of tokens for new users.

**DATABASE NAME: khabardabar**

**DATABASE TABLES: users and menuitems**

**RESTFUL APIs - User Registration (Signup and Login)**

1. A POST API is used for signing up a new user. 
2. A POST API is used for logging in a new user.
3. A GET API is used for verifying the token of a user when the browser is refreshed.

**RESTFUL APIs - Menupage (Private Route)**

1. A GET API is used to verify the token of a user while visiting the private route.
2. A POST API is used to insert/add information of a menu item into the menuitems database.
3. A GET API is used to read information of all menu items from the menuitems database.

**MIDDLEWARES**

1. A middleware is used to check the validity and existence of all credentials while performing any sort of user registration (signup or login).
2. A middleware is used to verify the token of a new user before visiting the private route.

### CLIENT-SIDE INFORMATION FOR THIS PROJECT

**Built With**

1. ReactJS.
2. Vanilla CSS.

**Libraries/Packages Used**

1. React-Router-DOM - Used for navigating to different routes.
2. Tanstack Query (React Query) - Used to fetch data from API.
3. React-Hot-Toast - Used to notify users after a certain action is performed.
4. React-Hook-Forms - Used for signup and login forms.

**AUTHENTICATION**

1. POST API from the server is used to insert new user information into the database.

**FEATURES**

1. A user can sign up for a new account with name, email and password.
2. A user can login to their existing account using email and password.
3. A user can view all menu items only after being authenticated. The menupage is a private route.
4. An authenticated user can add items to the cart. The cart can have multiple menu items.
5. An authenticated user can place an order.
6. When an authenticated user places an order, the order summary/reciept is shown right below the cart.
6. The total price of all added items is calculated and shown in the cart and the order summary.
