module.exports = {
  title: 'C-FMT-5: S-Curve Container',
  status: 'ready',
  // eslint-disable-next-line quote-props
  default: 'default',
  context: {
    cards: [
      {
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=767&h=430',
            1279: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=1280&h=717'
          },
          src: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=790&h=444',
          description: 'Image Description'
        },
        headline: 'S-Curve With Small Image',
        subhead: 'Optional Subheading',
        description:
          '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        buttonLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link'
      },
      {
        video: {
          url: '/images/video.mp4',
          poster:
            'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444'
        },
        headline: 'S-Curve With Small Video',
        subhead: 'Optional Subheading',
        description:
          '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        buttonLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link'
      }
    ]
  }
}
