# Instructions

1. Clone this repo
2. Change exam.env to env
3. start the mysql db
4. import sql file in db the sql file can be found in db directory
5. in the directory run `npm start` to start the application
6. Access the endpoints <br />
End points <br />
`localhost:3000/login` for logging in the user <br />
`localhost:3000/employees` for lists of employees <br />

JWT is for the authentication in log in <br />
using only ejs templating with tailwind CSS and Vue.JS cdn

## Credentials in log in
user : tylier <br />
password : test123

 
## Post Script
 - .env db credentials are not used because of the sequelize cli that can create a `config.json` under config directory, since i was using cli to migrate and seed data, but ended up using to importing directlt the sql instead of automating the migration and seeding data .env used variable are `APP_PORT` and `JWT_SECRET_TOKEN`.