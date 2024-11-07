import { CrudDocument } from 'wacom';

export interface Questmission extends CrudDocument {
	name: string;
	description: string;
}
