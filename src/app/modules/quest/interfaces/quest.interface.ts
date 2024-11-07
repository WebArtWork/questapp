import { CrudDocument } from 'wacom';

export interface Quest extends CrudDocument {
	name: string;
	description: string;
}
