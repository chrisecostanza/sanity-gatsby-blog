import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
// import {buildImageObj} from '../lib/helpers'
// import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
// import AuthorList from './author-list'
import {Link, graphql} from 'gatsby'
import BlogPostPreviewRecent from './blog-post-preview-recent'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'

import styles from './blog-post.module.css'

export const query = graphql`
  query RecentPostQuery {
    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          categories {
            id
            title
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt, data} = props

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>

          <aside className={styles.metaContent}>
            {categories && (
              <div className={styles.categories}>
                <ul>
                {categories.map(category => (
                  <li key={category._id}>{category.title}</li>
                ))}
                </ul>
              </div>
            )}
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MM-DD-YYYY')}
              </div>
            )}
          </aside>

          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.insightContent}>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </div>
          </div>

        </div>

        <Link to='/insights/' className={styles.goBack}>Back To Insights</Link>

        <div className={styles.recentPosts}>
          <h2>Recent Insights</h2>
          {postNodes && (
            <BlogPostPreviewRecent
              nodes={postNodes}
            />
          )}
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
