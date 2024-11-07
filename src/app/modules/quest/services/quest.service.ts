import { Injectable } from '@angular/core';
import { Quest } from '../interfaces/quest.interface';
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
export class QuestService extends CrudService<Quest> {
	quests: Quest[] = this.getDocs();

	questsByAuthor: Record<string, Quest[]> = {};

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'quest',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();

		this.filteredDocuments(this.questsByAuthor);
	}
}
