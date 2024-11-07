import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { QuestService } from '../../services/quest.service';
import { Quest } from '../../interfaces/quest.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { questFormComponents } from '../../formcomponents/quest.formcomponents';

@Component({
	templateUrl: './quests.component.html',
	styleUrls: ['./quests.component.scss']
})
export class QuestsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('quest', questFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Quest>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._questService.create(created as Quest);

					close();
				}
			});
		},
		update: (doc: Quest): void => {
			this._form.modal<Quest>(this.form, [], doc).then((updated: Quest) => {
				this._core.copy(updated, doc);

				this._questService.update(doc);
			});
		},
		delete: (doc: Quest): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this quest?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._questService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Quest): void => {
					this._form.modalUnique<Quest>('quest', 'url', doc);
				}
			}
		]
	};

	get rows(): Quest[] {
		return this._questService.quests;
	}

	constructor(
		private _translate: TranslateService,
		private _questService: QuestService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}
}
