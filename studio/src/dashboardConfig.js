export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed701c89a339750b7d276fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-z7khxjb5',
                  apiId: '2661b080-8a8d-45a9-b9a5-e22faad1b019'
                },
                {
                  buildHookId: '5ed701c8752e4912ffa43071',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5pcfyeue',
                  apiId: 'e413141e-7944-4ea3-a0f8-317086185af4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisecostanza/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5pcfyeue.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
