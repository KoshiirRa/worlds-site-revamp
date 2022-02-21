import createPersistedState from 'vuex-persistedstate'

export default ({ app, store }) => {
  createPersistedState({
    key: app.$config.version.replace(/\./g, ''),
    paths: [
      'auth.isAuthenticated',
      'auth.redirect',
      'user.bookmarks',
      'user.darkMode',
      'user.imperial',
      'characters.localCharacters',
      'migrator.migrated'
    ]
  })(store)
}
