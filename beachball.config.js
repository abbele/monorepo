module.exports = {
	versioning: {
			default: 'patch',
			strategy: 'auto'
	},
	changelog: {
			path: 'CHANGELOG.md',
			entryTemplate: '- {{version}} ({{date}}): {{message}}'
	},
	packages: ['packages/*']
};
  