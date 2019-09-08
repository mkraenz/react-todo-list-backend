export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7536de4e71d0aca72deeb5',
                  title: 'Sanity Studio',
                  name: 'react-todo-list-backend-studio',
                  apiId: 'a7450a68-c818-4700-b8e3-9f7aa606b524'
                },
                {
                  buildHookId: '5d7536de55efc0c67ca77289',
                  title: 'Portfolio Website',
                  name: 'react-todo-list-backend',
                  apiId: '17593698-ab50-4cbe-8e34-2c6068daaaeb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/proSingularity/react-todo-list-backend',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://react-todo-list-backend.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
