module.exports = {
  name: 'posts',
  exposes: {
    './Module': 'apps/posts/src/app/remote-entry/entry.module.ts',
  },
};
