export interface Env {
	// database config
	db_host: string;
	db_name: string;

	// us-west-2 - (primary) write/read
	db_user_1: string;
	db_pw_1: string;

	// all regions below are read replicas

	// us-east-2
	db_user_2: string;
	db_pw_2: string;

	// ap-northeast-1
	db_user_3: string;
	db_pw_3: string;

	// ap-southeast-1
	db_user_4: string;
	db_pw_4: string;

	// sa-east-1 
	db_user_5: string;
	db_pw_5: string;

	// ap-south-1
	db_user_6: string;
	db_pw_6: string;

	// eu-central-1 
	db_user_7: string;
	db_pw_7: string;

	// ap-southeast-2
	db_user_8: string;
	db_pw_8: string;

	// eu-west-2
	db_user_9: string;
	db_pw_9: string;

	// us-east-1
	db_user_10: string;
	db_pw_10: string;
}