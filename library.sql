use Library;

create table Member(
-- attributes
	member_id int not null auto_increment,
    first_name varchar(20) not null,
    last_name varchar(20), -- can be null
    phone varchar(15) not null,
    email varchar(50),
    date_of_birth date not null ,
    student_id int,
    faculty_id int,
    
    -- constraints
    primary key(member_id)
	);

create table Student(
-- attributes
	student_id int not null auto_increment,
    class int,
    section varchar(1),
	
    -- constraints
    primary key(student_id)
	);

create table Faculty(
-- attributes
	faculty_id int not null auto_increment,
    department varchar(10),
    
    -- constraints
    primary key(faculty_id)
    );
    
create table Book(
-- attributes
	book_id int not null auto_increment,
    title varchar(50) not null,
    author_id int, -- can be null. The author can be lost in time
    genre_id int not null,
    publication_id int not null,
    ISBN bigint,
    
    -- constraints
    primary key(book_id)
    );
    
-- idk if its important at the moment. Subject to change
create table Genre(
-- attributes
	genre_id int not null auto_increment,
    name varchar(20) not null,
    
    -- constraints
    primary key(genre_id)
    );
    
create table Publication(
	publication_id int not null auto_increment,
    publisher varchar(50), -- could be unknown
    year varchar(4), -- could be unknown
    no_of_pages bigint not null,
    
    primary key(publication_id)
    );
    
create table Copy(
	book_id int not null,
    copy_id int not null,
    publication_id int not null,
    
    primary key(book_id,copy_id)
    );

create table Author(
	author_id int not null auto_increment,
    first_name varchar(20) not null,
    last_name varchar(20), -- can be null
    date_of_birth date, -- can be unknown
    date_of_death date, -- can be unknown or maybe the author isnt dead yet
    nationality varchar(10),
    
    primary key(author_id)
    );
    
    
create table Issue(
	member_id int not null,
    book_id int not null,
    date_issued date not null,
    date_due date not null,
    
    primary key(member_id,book_id)
    );
    
create table Fine(
	member_id int not null,
    book_id int not null,
    days_overdue int not null, -- also calculated, dk how to do it yet
    amount bigint, -- calculated field using the number of days overdue
    
    primary key(member_id,book_id)
    );