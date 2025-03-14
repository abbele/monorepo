module.exports = {
	branch: 'main',
	bumpDeps: true,
	versioning: {
		default: 'patch',
		strategy: 'auto'
	},
	changelog: {
		path: 'CHANGELOG.md',
		entryTemplate: '- {{version}} ({{date}}): {{message}}'
	},
	scope: ['packages/*'],
	packages: ['packages/*'],
	access: 'public',
};
  