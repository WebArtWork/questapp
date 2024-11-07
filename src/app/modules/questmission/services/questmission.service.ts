import { Injectable } from '@angular/core';
import { Questmission } from '../interfaces/questmission.interface';
import {
	AlertService,
	CoreService,
	HttpService,
	StoreService,
	CrudService
} from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class QuestmissionService extends CrudService<Questmission> {
	questmissions: Questmission[] = this.getDocs();

	questmissionsByAuthor: Record<string, Questmission[]> = {};

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'questmission',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();

		this.filteredDocuments(this.questmissionsByAuthor);
	}
}
