import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { QuestmissionService } from '../../services/questmission.service';
import { Questmission } from '../../interfaces/questmission.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { questmissionFormComponents } from '../../formcomponents/questmission.formcomponents';

@Component({
	templateUrl: './missions.component.html',
	styleUrls: ['./missions.component.scss']
})
export class MissionsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('questmission', questmissionFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Questmission>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._questmissionService.create(created as Questmission);

					close();
				}
			});
		},
		update: (doc: Questmission): void => {
			this._form.modal<Questmission>(this.form, [], doc).then((updated: Questmission) => {
				this._core.copy(updated, doc);

				this._questmissionService.update(doc);
			});
		},
		delete: (doc: Questmission): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this questmission?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._questmissionService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Questmission): void => {
					this._form.modalUnique<Questmission>('questmission', 'url', doc);
				}
			}
		]
	};

	get rows(): Questmission[] {
		return this._questmissionService.questmissions;
	}

	constructor(
		private _translate: TranslateService,
		private _questmissionService: QuestmissionService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}
}
