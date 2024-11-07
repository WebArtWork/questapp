import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { QuestService } from '../../services/quest.service';
import { Quest } from '../../interfaces/quest.interface';

@Component({
	selector: 'quest-selector',
	templateUrl: './quest-selector.component.html',
	styleUrls: ['./quest-selector.component.scss'],
	standalone: true,
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Quest[] {
		return this._questService.quests;
	}

	constructor(private _questService: QuestService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
