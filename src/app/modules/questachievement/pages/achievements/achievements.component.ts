import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { QuestachievementService } from '../../services/questachievement.service';
import { Questachievement } from '../../interfaces/questachievement.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { questachievementFormComponents } from '../../formcomponents/questachievement.formcomponents';

@Component({
	templateUrl: './achievements.component.html',
	styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('questachievement', questachievementFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Questachievement>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._questachievementService.create(created as Questachievement);

					close();
				}
			});
		},
		update: (doc: Questachievement): void => {
			this._form.modal<Questachievement>(this.form, [], doc).then((updated: Questachievement) => {
				this._core.copy(updated, doc);

				this._questachievementService.update(doc);
			});
		},
		delete: (doc: Questachievement): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this questachievement?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._questachievementService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Questachievement): void => {
					this._form.modalUnique<Questachievement>('questachievement', 'url', doc);
				}
			}
		]
	};

	get rows(): Questachievement[] {
		return this._questachievementService.questachievements;
	}

	constructor(
		private _translate: TranslateService,
		private _questachievementService: QuestachievementService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}
}
