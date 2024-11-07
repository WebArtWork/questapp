export const questmissionFormComponents = {
	formId: 'questmission',
	title: 'Questmission',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill questmission title',
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
					value: 'fill questmission description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
