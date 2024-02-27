--DATABASE CREATION
-- may need to add more tables or attributes later when we know what actually needs to be stored
-- dont know how to store password properly might need to do that
create database setup;

create table account (
    account_id SERIAL PRIMARY KEY,
    username VARCHAR(15) NOT NULL,
    password VARCHAR(15) NOT NULL 
 );

create table user_profile (
   user_id SERIAL PRIMARY KEY,
   first_name VARCHAR(20) NOT NULL,
   surname VARCHAR(20) NOT NULL,
   email  VARCHAR(45) NOT NULL,
   phone_num VARCHAR(11) NOT NULL,
   account_id INT REFERENCES account (account_id)
);



 create table calendar (
    calendar_id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    account_id INT REFERENCES account (account_id)
 );


create table event (
   event_id SERIAL PRIMARY KEY,
   title VARCHAR(50) NOT NULL,
   description VARCHAR(255) NOT NULL,
   type VARCHAR(30) NOT NULL,
   scheduled_at Date NOT NULL,
   reminder_count INTEGER NOT NULL,
   location VARCHAR(255) NOT NULL,
   is_active BOOLEAN NOT NULL,
   calendar_id INT REFERENCES calendar (calendar_id)
);

create table reminder (
   reminder_id SERIAL PRIMARY KEY,
   what_task VARCHAR(100) NOT NULL,
   time_left DATE NOT NULL,
   event_id INT REFERENCES event(event_id)
);




   