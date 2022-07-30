INSERT INTO global_settings (`key`,value) VALUES
	 ('APPROVAL_NUMBER','2'),
	 ('VERSION_SYSTEM','01.01.00');

INSERT INTO departament (id,description) VALUES
	 ('28d30989-0966-4a41-bf39-1228739f8dda','Produção'),
	 ('75c8265f-4805-4110-a4eb-352b1bc9c5e9','Rh'),
	 ('8ee61e6b-04e2-4004-b07e-2a72cb73a7be','Financeiro');

  
INSERT INTO profile (id,description) VALUES
  ('301ae185-1498-4bc6-a372-94ec69b14b83','gestor'),
  ('4901402a-295b-4c53-9249-237a1aa0bac3','programador'),
  ('e356abe0-e609-45f4-9824-7576f142ec47','analista'),
  ('e4cdfc84-8da0-4052-a23f-aae674ba6f44','tester');

INSERT INTO collaborator (id,name,email,register,birthday,hiringdate,`type`,departamentId,profileId,supervisorId) VALUES
	 ('7155fb22-cc85-4735-adba-322ee31e8873','Caliton Marcos','caliton@gmail.com','1228','1996-06-03','2018-10-01','effective','28d30989-0966-4a41-bf39-1228739f8dda','4901402a-295b-4c53-9249-237a1aa0bac3',NULL),
	 ('fa9a4248-5cc3-4b7c-8430-7a1c68676393','Lilian','lilian@gmail.com','1234','1985-01-01','2021-01-01','effective','75c8265f-4805-4110-a4eb-352b1bc9c5e9','301ae185-1498-4bc6-a372-94ec69b14b83',NULL);


INSERT INTO period_status (id,description,limitMonths,color,icon,tooltip,`type`) VALUES
	 ('a','ALTO',3,'orange','eva-alert-triangle-outline','de 1 ano e 4 meses até 1 ano e 6 meses (limite da empresa)','effective'),
	 ('b','MEDIO',5,'yellow-7','eva-alert-triangle-outline','de 1 ano e 1 mês até 1 ano e 3 meses (próximo ao limite da empresa)','effective'),
	 ('c','CRITICO',0,'red','eva-alert-triangle-outline','de 1 ano e 7 meses até 1 ano e 11 meses (limite da CLT)','effective'),
	 ('d','NORMAL',12,'green','eva-checkmark-circle-outline','1 ano  (tem direito a férias)','effective'),
	 ('e','ALTO',3,'orange','eva-alert-triangle-outline','de 1 ano e 4 meses até 1 ano e 6 meses (limite da empresa)','intern'),
	 ('f','MEDIO',5,'yellow-7','eva-alert-triangle-outline','de 1 ano e 1 mês até 1 ano e 3 meses (próximo ao limite da empresa)','intern'),
	 ('g','CRITICO',0,'red','eva-alert-triangle-outline','de 1 ano e 7 meses até 1 ano e 11 meses (limite da CLT)','intern'),
	 ('h','NORMAL',12,'green','eva-checkmark-circle-outline','1 ano  (tem direito a férias)','intern');


INSERT INTO `user` (id,`role`,login,password,collaboratorId) VALUES
	 ('3612e6a9-1416-4a3d-9a03-3dd13713ef24','hr','lilian','123','fa9a4248-5cc3-4b7c-8430-7a1c68676393');