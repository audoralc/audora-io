// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
      path: '/',
      name: 'Home',
      getComponent(nextState, cb) {
        import('containers/Home')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      getComponent(nextState, cb) {
        import('containers/Dashboard')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },


    {
      path: '/about',
      name: 'about',
      getComponent(nextState, cb) {
        import('containers/About')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },


    {
      path: '/blog',
      name: 'Blog',
      getComponent(nextState, cb) {
        import('containers/Blog')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
        {
          path: '/blog/post',
          name: 'BlogPost',
          getComponent(nextState, cb) {
            import('containers/BlogPost')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },

        {
          path: '/sumo-redo',
          name: 'SRL Redesign',
          getComponent(nextState, cb) {
            import('containers/SumoRedesign')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/Pyxis',
          name: 'Pyxis Static Demo',
          getComponent(nextState, cb) {
            import('containers/Pyxis')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
          {
            path: '/pyxis-study',
            name: 'Pyxis Study',
            getComponent(nextState, cb) {
              import('containers/PyxisStudy')
                .then(loadModule(cb))
                .catch(errorLoading);
            },
          },
        {
          path: '/this-site',
          name: 'About audora.me',
          getComponent(nextState, cb) {
            import('containers/ThisSite')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/semper-disco',
          name: 'Semper Disco',
          getComponent(nextState, cb) {
            import('containers/SemperDisco')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
            {
          path: '/semper-study',
          name: 'About Semper Disco',
          getComponent(nextState, cb) {
            import('containers/SemperStudy')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
   {
    path: '/join',
    name: 'SignUp',
    getComponent(nextState, cb) {
      import('containers/SignUp')
        .then(loadModule(cb))
        .catch(errorLoading);
    },
      },


       {
        path: '/login',
        name: 'SignIn',
        getComponent(nextState, cb) {
          import('containers/SignIn')
            .then(loadModule(cb))
            .catch(errorLoading);
        },
          },


     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
        },


  ];
}
