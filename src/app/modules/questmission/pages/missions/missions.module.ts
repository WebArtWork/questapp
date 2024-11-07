import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MissionsComponent } from './missions.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: MissionsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [MissionsComponent],
	providers: []
})
export class QuestmissionModule {}
