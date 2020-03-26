import React from "react"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography.js"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile {
          totalCount
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://localhost:9000" />
      </Helmet>
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin-top: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <div
          css={css`
            float: right;
          `}
        >
          <Link to={`/about/`}>
            <h3>About</h3>
          </Link>
          <Link to={`/my-files/`}>
            <h3>{data.allFile.totalCount} Panda files!</h3>
          </Link>
        </div>
        {children}
      </div>
    </div>
  )
}
