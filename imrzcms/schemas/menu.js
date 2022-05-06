export const menu = {
  title: 'Menu',
  name: 'menu',
  type: 'document',

  fields: [
    /***** Imrz Logo *****/
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      required: true,
    },

    /***** Menu Links *****/
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      required: true,
      of: [{ type: 'string'},],
      to: [{ type: 'url'},],
      options: {
          maxLength: 100,
          sortable: true,
      }
    },

    /***** Call To Action Text  *****/
    {
      title: 'Button Text',
      name: 'button',
      type: 'string',
      required: true,
    },
  ],
}
