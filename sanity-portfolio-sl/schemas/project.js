export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'githuburl',
      title: 'GithubURL',
      type: 'url'
    },
    {
      name: 'viewurl',
      title: 'ViewURL',
      type: 'url'
    },
    // {
    //   name: 'stack',
    //   title: 'Stack',
    //   type: 'array',
    //   of: [{type: 'reference', to: [{type: 'stack'}]}]

    // }
  ]
}