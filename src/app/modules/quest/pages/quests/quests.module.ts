import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { QuestsComponent } from './quests.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: QuestsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [QuestsComponent],
	providers: []
})
export class QuestModule {}
