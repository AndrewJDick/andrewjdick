const config = {
  siteMetadata: {
    title: 'Andrew James',
    description: 'Software engineer focused on modern frontend web development',
    siteUrl: 'https://ajames.dev',
    image: '/assets/images/avatar.jpg',
    imageAlt: 'My headshot',
    twitter: '@phunkren',
    author: {
      name: 'Andrew James',
      email: 'contact@ajames.dev',
      location: 'London, UK',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-axe',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/blogs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-reading-time',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Andrew James',
        short_name: 'Andrew James',
        start_url: '/',
        background_color: '#fcfcfc',
        theme_color: '#5f9ea0',
        display: 'standalone',
        icon: 'src/assets/images/logo.png',
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const { siteUrl } = site.siteMetadata;
                const { slug, readingTime } = edge.node.fields;
                const { title, date } = edge.node.frontmatter;
                const url = `${siteUrl}${slug}`;

                return Object.assign({}, edge.node.frontmatter, {
                  date,
                  url,
                  guid: url,
                  custom_elements: [
                    {
                      'content:encoded': `<div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
                        <p>
                          I've posted a new article <em>"${title}"</em> and you can <a href="${url}">read it online</a>.
                          <br>
                          🗓 ${date} · ⏱ ${readingTime.text}                          
                        </p>
                      </div>`,
                    },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                      }
                      fields { 
                        slug 
                        readingTime {
                          text
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/blog/rss.xml',
            title: 'Blog: RSS Feed | Andrew James',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:400', 'Rubik:300'],
          text: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@£#$%^&*()-_=+{[]};:'"|,<.>/?~`,
        },
      },
    },
  ],
};

// Prevents GA analytics tracking staging.ajames.dev
// Sauce: https://www.chaseadams.io/posts/netlify-gatsby-analytics/
if (process.env.CONTEXT === 'production') {
  const gaConfig = {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-158626991-1',
      anonymize: true,
      respectDNT: true,
    },
  };

  config.plugins.push(gaConfig);
}

module.exports = config;
