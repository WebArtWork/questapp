import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { QuestachievementService } from '../../services/questachievement.service';
import { Questachievement } from '../../interfaces/questachievement.interface';

@Component({
	selector: 'questachievement-selector',
	templateUrl: './questachievement-selector.component.html',
	styleUrls: ['./questachievement-selector.component.scss'],
	standalone: true,
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Questachievement[] {
		return this._questachievementService.questachievements;
	}

	constructor(private _questachievementService: QuestachievementService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
