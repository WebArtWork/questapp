export const questFormComponents = {
	formId: 'quest',
	title: 'Quest',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill quest title',
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
					value: 'fill quest description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
