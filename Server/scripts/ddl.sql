-- DROP SCHEMA "GP";

CREATE SCHEMA gp AUTHORIZATION postgres;


-- "GP".users definition

-- Drop table

-- DROP TABLE "GP".users;

CREATE TABLE gp.users (
	user_id serial4 NOT NULL,
	user_firstname varchar(100) NOT NULL,
	user_lastname varchar(100) NULL,
	user_mail varchar(50) NOT NULL,
	user_phone varchar(20) NOT NULL,
	user_birthday date NULL,
	user_gender varchar(1) NOT NULL,
	user_password varchar(255) NOT NULL,
	created_on timestamp NOT NULL,
	CONSTRAINT users_pkey PRIMARY KEY (user_id)
);

INSERT INTO gp.users
(user_id, user_firstname, user_lastname, user_mail, user_phone, user_birthday, user_gender, user_password, created_on)
VALUES(nextval('gp.users_user_id_seq'::regclass), '', '', '', '', '', '', '', '');