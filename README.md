# Portfolio Website

This is a portfolio website built using **Django 3.2**, **Next.js 12**, and **Material UI 5** that uses a **PostgreSQL** database to store data.

### Dark mode:

![plot](https://github.com/BobsProgrammingAcademy/Portfolio-Website/blob/main/frontend/public/images/dark_theme.png?raw=true)

### Light mode:

![plot](https://github.com/BobsProgrammingAcademy/Portfolio-Website/blob/main/frontend/public/images/light_theme.png?raw=true)


## Table of Contents 
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the application](#run-the-application)
- [Adding data to the application](#add-data-to-the-application)


## Prerequisites

Install the following prerequisites:

1. [Python](https://www.python.org/downloads/)
2. [Node.js](https://nodejs.org/en/)
3. [PostgreSQL](https://www.postgresql.org/download/)
4. [Visual Studio Code](https://code.visualstudio.com/download)


## Installation

### Backend

#### 1. Create a virtual environment

From the **root** directory run:

```bash
cd backend
```
```bash
python -m venv venv
```

#### 2. Activate the virtual environment

From the **backend** directory run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

#### 3. Install required backend dependencies

From the **backend** directory run:

```bash
pip install -r requirements.txt
```

#### 4. Set up a PostgreSQL database

With **PostgreSQL** up and running, in a new Terminal window run:

```bash
dropdb --if-exists portfolio
```

Start **psql**, which is a terminal-based front-end to PostgreSQL, by running the command:

```bash
psql postgres
```

Create a new PostgreSQL database:

```sql
CREATE DATABASE portfolio;
```

Create a new database admin user:

```sql
CREATE USER yourusername WITH SUPERUSER PASSWORD 'yourpassword';
```

To quit **psql**, run:

```bash
\q
```

#### 5. Set up backend environment variables

From the **backend** directory run:

```bash
touch config/.env
```

The **touch** command will create the **.env** file in the **backend/config** directory. This command works on Mac and Linux but not on Windows. If you are a Windows user, instead of using the command line, you can create the **.env** file manually by navigating in Visual Studio Code to the Explorer, clicking on the **config** directory (inside the **backend** directory), and selecting the option **New File**.


Next, declare environment variables in the **.env** file. Make sure you don't use quotation marks around the strings.

```bash
SECRET_KEY=yoursecretkey
DATABASE_NAME=portfolio
DATABASE_USER=yourusername
DATABASE_PASS=yourpassword
DATABASE_HOST=localhost
FRONTEND_URL=http://localhost:3000
```

#### 6. Run migrations

From the **backend** directory run:

```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```

#### 7. Create an admin user to access the Django Admin interface

From the **backend** directory run:

```bash
python manage.py createsuperuser
```

When prompted, enter a username, email, and password.

### Frontend

#### 1. Install required frontend dependencies

From the **root** directory run:

```bash
cd frontend
```
```bash
npm install
```

#### 2. Set up frontend environment variables

From the **frontend** directory run:

```bash
touch .env.development && touch .env.production
```

The **touch** command will create the **.env.development** and **.env.production** files in the **frontend** directory. This command works on Mac and Linux but not on Windows. If you are a Windows user, instead of using the command line, you can create the **.env.development** and **.env.production** files manually by navigating in Visual Studio Code to the Explorer, clicking on the **frontend** directory, and selecting the option **New File**.

Next, declare environment variables in the **.env.development** file. Make sure you don't use quotation marks around the strings.

```bash
BACKEND_HOST=127.0.0.1
BACKEND_URL=http://127.0.0.1:8000
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

#### 1. Run backend

From the **backend** directory run:

```bash
python manage.py runserver
```

#### 2. Run frontend

From the **frontend** directory run:

```bash
npm run dev
```

#### 3. View the application

Go to http://localhost:3000/ to view the application.


## Add data to the application

Add data through Django Admin.

Go to http://127.0.0.1:8000/admin to access the Django Admin interface and sign in using the admin credentials.
