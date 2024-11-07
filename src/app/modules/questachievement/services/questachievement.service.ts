import { Injectable } from '@angular/core';
import { Questachievement } from '../interfaces/questachievement.interface';
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
export class QuestachievementService extends CrudService<Questachievement> {
	questachievements: Questachievement[] = this.getDocs();

	questachievementsByAuthor: Record<string, Questachievement[]> = {};

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'questachievement',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();

		this.filteredDocuments(this.questachievementsByAuthor);
	}
}
