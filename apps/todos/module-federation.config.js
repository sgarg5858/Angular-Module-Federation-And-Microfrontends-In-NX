module.exports = {
  name: 'todos',
  exposes: {
    './Module': 'apps/todos/src/app/remote-entry/entry.module.ts',
  },
};
