insert into activity (name, place, date) values ('pilka nozna', 'gdansk', '2022-11-01 18.00.00')
insert into activity (name, place, date) values ('piwo', 'gdansk', '2022-10-31 20.00.00')
insert into activity (name, place, date) values ('kregle', 'gdansk', '2022-10-27 19.00.00')
insert into activity (name, place, date) values ('bilard', 'gdansk', '2022-10-24 20.00.00')

insert into participant (user_name, email) values ('testUser1', 'test1@gmail.com')
insert into participant (user_name, email) values ('testUser2', 'test2@gmail.com')
insert into participant (user_name, email) values ('testUser3', 'test3@gmail.com')
insert into participant (user_name, email) values ('testUser4', 'test4@gmail.com')
insert into participant (user_name, email) values ('testUser5', 'test5@gmail.com')

insert into activity_participants (activity_id, participants_id) values (1, 1)
insert into activity_participants (activity_id, participants_id) values (1, 2)
insert into activity_participants (activity_id, participants_id) values (1, 3)

insert into activity_participants (activity_id, participants_id) values (2, 1)
insert into activity_participants (activity_id, participants_id) values (2, 2)
insert into activity_participants (activity_id, participants_id) values (2, 3)
insert into activity_participants (activity_id, participants_id) values (2, 4)

insert into activity_participants (activity_id, participants_id) values (3, 1)
insert into activity_participants (activity_id, participants_id) values (3, 2)
insert into activity_participants (activity_id, participants_id) values (3, 3)
insert into activity_participants (activity_id, participants_id) values (3, 5)

insert into activity_participants (activity_id, participants_id) values (4, 2)
insert into activity_participants (activity_id, participants_id) values (4, 3)

