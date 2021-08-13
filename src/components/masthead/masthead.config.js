module.exports = {
  title: 'Masthead component',
  status: 'ready',
  context: {
    mediaPosition: 'right',
    subheading: 'Optional Subheading',
    heading: 'Masthead Width Right Aligned Image',
    copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
    ctaLabel: 'Primary Call-to-Action',
    linkLabel: 'Large Text Link',
    image: {
      srcset: {
        767: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=768&h=414',
        1279: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=1280&h=650'
      },
      src: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=760&h=650',
      description: 'Image Description'
    }
  },
  variants: [
    {
      name: 'Background Image',
      context: {
        mediaPosition: 'background',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=768&h=414',
            1279: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=1280&h=650'
          },
          src: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=760&h=650',
          description: 'Image Description'
        }
      }
    },
    {
      name: 'Left aligned Image',
      context: {
        mediaPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Left Aligned Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=768&h=414',
            1279: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=1280&h=650'
          },
          src: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=760&h=650',
          description: 'Image Description'
        }
      }
    },
    {
      name: 'Right aligned Image',
      context: {
        mediaPosition: 'right',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Right Aligned Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=768&h=414',
            1279: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=1280&h=650'
          },
          src: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=760&h=650',
          description: 'Image Description'
        }
      }
    },
    {
      name: 'Masthead Over Full Width Video',
      context: {
        mediaPosition: 'background',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        video: {
          url: '/images/video.mp4',
          poster:
            'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444'
        }
      }
    },
    {
      name: 'Masthead Width Left Aligned Video',
      context: {
        mediaPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Left Aligned Video',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        video: {
          url: '/images/video.mp4',
          poster:
            'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444'
        }
      }
    },
    {
      name: 'Masthead Width Right Aligned Video',
      context: {
        mediaPosition: 'right',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Left Aligned Video',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        video: {
          url: '/images/video.mp4',
          poster:
            'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444'
        }
      }
    },
    {
      name: 'Masthead Width Full Vimeo Video',
      context: {
        mediaPosition: 'background',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        vimeoId: '430133542'
      }
    },
    {
      name: 'Masthead Width left Vimeo Video',
      context: {
        mediaPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        vimeoId: '430133542'
      }
    },
    {
      name: 'Masthead Width Right Vimeo Video',
      context: {
        mediaPosition: 'right',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        vimeoId: '430133542'
      }
    },
    {
      name: 'Masthead Over Full Width Image',
      context: {
        mediaPosition: 'background',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy:
          '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        youtubeId: 'DSLgAsrcpGQ'
      }
    },
    {
      name: 'Masthead Width Left Youtube Video',
      context: {
        mediaPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Left Aligned Video',
        copy:
          '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        youtubeId: 'DSLgAsrcpGQ'
      }
    },
    {
      name: 'Masthead Width Right Youtube Video',
      context: {
        mediaPosition: 'right',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Right Aligned Video',
        copy:
          '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        youtubeId: 'DSLgAsrcpGQ'
      }
    }
  ]
}
