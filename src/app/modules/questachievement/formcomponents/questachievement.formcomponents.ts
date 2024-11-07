export const questachievementFormComponents = {
	formId: 'questachievement',
	title: 'Questachievement',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill questachievement title',
				},
				{
					name: 'Label',
					value: 'Title',
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill questachievement description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
