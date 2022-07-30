INSERT INTO departament (id,description) VALUES
	 ('28d30989-0966-4a41-bf39-1228739f8dda','Produção'),
	 ('75c8265f-4805-4110-a4eb-352b1bc9c5e9','Rh'),
	 ('8ee61e6b-04e2-4004-b07e-2a72cb73a7be','Financeiro');

INSERT INTO period_status (id,description,limitMonths,color,icon,tooltip,`type`) VALUES
	 ('a','ALTO',3,'orange','eva-alert-triangle-outline','de 1 ano e 4 meses até 1 ano e 6 meses (limite da empresa)','effective'),
	 ('b','MEDIO',5,'yellow-7','eva-alert-triangle-outline','de 1 ano e 1 mês até 1 ano e 3 meses (próximo ao limite da empresa)','effective'),
	 ('c','CRITICO',0,'red','eva-alert-triangle-outline','de 1 ano e 7 meses até 1 ano e 11 meses (limite da CLT)','effective'),
	 ('d','NORMAL',12,'green','eva-checkmark-circle-outline','1 ano  (tem direito a férias)','effective'),
	 ('e','ALTO',3,'orange','eva-alert-triangle-outline','de 1 ano e 4 meses até 1 ano e 6 meses (limite da empresa)','intern'),
	 ('f','MEDIO',5,'yellow-7','eva-alert-triangle-outline','de 1 ano e 1 mês até 1 ano e 3 meses (próximo ao limite da empresa)','intern'),
	 ('g','CRITICO',0,'red','eva-alert-triangle-outline','de 1 ano e 7 meses até 1 ano e 11 meses (limite da CLT)','intern'),
	 ('h','NORMAL',12,'green','eva-checkmark-circle-outline','1 ano  (tem direito a férias)','intern');


INSERT INTO profile (id,description) VALUES
	 ('301ae185-1498-4bc6-a372-94ec69b14b83','gestor'),
	 ('4901402a-295b-4c53-9249-237a1aa0bac3','programador'),
	 ('e356abe0-e609-45f4-9824-7576f142ec47','analista'),
	 ('e4cdfc84-8da0-4052-a23f-aae674ba6f44','tester');


INSERT INTO global_settings (`key`,value) VALUES
	 ('ALLOWED_DAYS_PER_MONTHS','2.5'),
	 ('PARAM_LIMIT_DATE','6'),
	 ('PARAM_LIMIT_DATE_ENTERPRISE','6'),
	 ('PARAM_LIMIT_DATE_GOVERNE','23'),
	 ('MONTHS_IN_A_YEAR','12'),
	 ('VERSION_SYSTEM','01.00.00'),
	 ('APPROVAL_NUMBER','2'),
	 ('MAX_DAYS_PER_PERIOD','30');


INSERT INTO collaborator (id,name,email,register,birthday,hiringdate,departamentId,profileId,supervisorId,`type`) VALUES
	 ('c8a86b0d-4dec-4377-9f3f-d6f891d2b7cf','Admin','','1234','2000-01-02','2019-10-02',NULL,NULL,NULL,'effective');

INSERT INTO `user` (id,`role`,login,password,collaboratorId) VALUES
	 ('b6727d52-f806-494f-9419-40b495c0c4a7','admin','admin','123','c8a86b0d-4dec-4377-9f3f-d6f891d2b7cf');