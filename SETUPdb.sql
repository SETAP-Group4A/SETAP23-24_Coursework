create database 'SETUP';

create table 
 account (
    account_id SERIAL PRIMARY KEY,
    Username VARCHAR(15) NOT NULL,
    password_ VARCHAR(15) NOT NULL
 )

create table
userProfile (
   userProfile_id SERIAL PRIMARY KEY,
   Fname VARCHAR(20) NOT NULL,
   Sname VARCHAR(20) NOT NULL,
   Email  VARCHAR(45) NOT NULL,
   PhoneNum INT(11) NOT NULL,
   account_id FOREIGN KEY REFERENCES userProfile_account (userProfile_id),
)



 create table
 calender (
    calender_id SERIAL PRIMARY KEY,
    date_ date NOT NULL,
    Event_id FOREIGN KEY REFERENCES calander ( calander_id)
    Account_id FOREIGN KEY REFERENCES calander ( calander_id)
 )


create table
Event_ (
   Event_id SERIAL PRIMARY KEY,
   Title VARCHAR(50) NOT NULL,
   Description_ VARCHAR(255) NOT NULL,
   Type_ VARCHAR(30) NOT NULL,
   ScheduledAt Date NOT NULL,
   ReminderCount INTEGER NOT NULL,
   Location_ VARCHAR(255) NOT NULL,
   isActive BOOLEAN NOT NULL,
    Account_id FOREIGN KEY REFERENCES event_ ( event_id)
)

create table
reminder (
   reminder_id SERIAL PRIMARY KEY,
   whatTask VARCHAR(100) NOT NULL,
   TimeLeft DATE NOT NULL,
   Event_id FOREIGN KEY REFERENCES event_( event_id )
)




   