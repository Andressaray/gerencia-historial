interface User {
	id?: number;
	card_id: string;
	name: string;
	lastname: string;
	email: string;
	phone: string;
	password: string;
	photo: string;
	age: number;
	createdAt?: string;
	updatedAt?: string;
	profile_id: number;
}

export {
  User
}