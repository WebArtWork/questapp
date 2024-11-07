import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { QuestmissionService } from '../../services/questmission.service';
import { Questmission } from '../../interfaces/questmission.interface';

@Component({
	selector: 'questmission-selector',
	templateUrl: './questmission-selector.component.html',
	styleUrls: ['./questmission-selector.component.scss'],
	standalone: true,
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Questmission[] {
		return this._questmissionService.questmissions;
	}

	constructor(private _questmissionService: QuestmissionService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
