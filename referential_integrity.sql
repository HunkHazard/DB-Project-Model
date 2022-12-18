use Library;


-- alter table Member
-- add constraint member_student_fk
-- foreign key (student_id) references Student(student_id)
-- on delete set null
-- on update cascade;
--  
--  alter table Member
--  add constraint member_faculty_fk 
--  foreign key (faculty_id) references Faculty(faculty_id)
--  on delete set null
--  on update cascade

-- alter table Book
-- add constraint book_genre_fk
-- foreign key (genre_id) references Genre(genre_id)
-- on delete cascade
-- on update cascade;

-- alter table Book
-- add constraint book_publication_fk
-- foreign key (publication_id) references Publication(publication_id)
-- on delete cascade
-- on update cascade;

-- alter table Book
-- add constraint book_author_fk
-- foreign key (author_id) references Author(author_id)
-- on delete cascade
-- on update cascade;

-- alter table Copy
-- add constraint copy_book_fk
-- foreign key (book_id) references Book(book_id)
-- on delete cascade
-- on update cascade;

-- alter table Copy
-- add constraint copy_publication_fk
-- foreign key (publication_id) references Publication(publication_id)
-- on delete cascade
-- on update cascade;

-- alter table Fine
-- add constraint fine_member_fk
-- foreign key (member_id) references Member(member_id)
-- on delete cascade
-- on update cascade;

-- alter table Fine
-- add constraint fine_book_fk
-- foreign key (book_id) references Book(book_id)
-- on delete cascade
-- on update cascade;

-- alter table Issue
-- add constraint issue_book_fk
-- foreign key (book_id) references Book(book_id)
-- on delete cascade
-- on update cascade;

-- alter table Issue
-- add constraint issue_member_fk
-- foreign key (member_id) references Member(member_id)
-- on delete cascade
-- on update cascade;