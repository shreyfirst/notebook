/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from './layout'
import { hasDate, getDate, getName } from './util'
import { filter, isEmpty, orderBy } from 'lodash'
import { format } from 'date-fns'
import { React, Fragment } from 'react'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const Nav = () => {
  const data = useStaticQuery(pages)
  const nodes = filter(
    data.allSitePage.nodes,
    ({ path }) => path !== '/' && !path.includes('404') && path.includes('norm_')
  )
  const button_nodes = filter(
    data.allSitePage.nodes,
    ({ path }) => path !== '/' && !path.includes('404') && path.includes('head_')
  )

  const links = orderBy(
    nodes.map(node => {
      const { path } = node
      node.name = getName(path)
      node.date = hasDate(path) ? getDate(path) : null
      return node
    }),
    ['name'],
    ['asc']
  )

  const button_links = orderBy(
    button_nodes.map(node => {
      const { path } = node
      node.name = getName(path)
      node.date = null
      return node
    }),
    ['date', 'name'],
    ['desc', 'desc']
  )

  return (
    <div>
    <ol
      sx={{
        listStyle: 'none',
        p: 0,
        ml: 0
      }}
    >
      {button_nodes.map(({ name, date, path }) => (
        <li
          key={path}
          sx={
            isEmpty(date)
              ? { display: 'inline-block', mr: 3, mb: 4 }
              : { my: 1 }
          }
        >
          <Link
            to={path}
            sx={{
              display: 'flex',
              flexDirection: ['column-reverse', 'row'],
              color: 'primary',
              textDecoration: 'none',
              ...(isEmpty(date)
                ? {
                  px: 3,
                  py: 1,
                  border: '2px solid currentColor',
                  borderRadius: 'circle',
                  fontSize: 2,
                  // transform: 'rotate(-2deg)'
                }
                : {})
            }}
          >
            
            <strong sx={{ lineHeight: 'title' }}>{name}</strong>
          </Link>
        </li>
      ))}
    </ol>
    <strong sx={{ 

color: "var(--theme-ui-colors-text, #ffeaeb)",
"font-family": "WhyteInktrap,system-ui,-apple-system,BlinkMacSystemFont",
"line-height": "1.125",
"font-weight": "bold",
"font-size": "22px"

}}>If you prefer to read each part separately:</strong>
    <ol
    sx={{
      listStyle: 'none',
      p: 0,
      ml: 0
    }}
  >
    {links.map(({ name, date, path }) => (
      <li
        key={path}
        sx={
          isEmpty(date)
            ? { display: 'inline-block', mr: 3, mb: 4 }
            : { my: 1 }
        }
      >
        <Link
          to={path}
          sx={{
            display: 'flex',
            flexDirection: ['column-reverse', 'row'],
            color: 'primary',
            textDecoration: 'none',
            ...(isEmpty(date)
              ? {
                px: 3,
                py: 1,
                border: '2px solid currentColor',
                borderRadius: 'circle',
                fontSize: 2,
                // transform: 'rotate(-2deg)'
              }
              : {})
          }}
        >
         
          <strong sx={{ lineHeight: 'title' }}>{name}</strong>
        </Link>
      </li>
    ))}
  </ol>
    </div>
  )
}

const pages = graphql`
  query Pages {
    allSitePage {
      nodes {
        path
      }
    }
  }
`
