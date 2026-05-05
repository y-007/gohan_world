import React from 'react'
import './AffiliateTable.css'

const Stars = ({ rating }) => (
  <span className="affiliate-table__stars" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'star star--filled' : 'star'}>★</span>
    ))}
  </span>
)

// rowKeys       — array of row object keys matching the columns array (generic mode)
// linkFirstColumn — when true, wraps the first cell in an <a> using row.link (no Action column)
const AffiliateTable = ({ caption, disclaimer, columns, rows, rowKeys, linkFirstColumn }) => {
  const showAction = !linkFirstColumn && rows.some(r => r.link)

  return (
    <div className="affiliate-table-wrapper">
      <div className="affiliate-table__scroll">
        <table className="affiliate-table">
          {caption && <caption className="affiliate-table__caption">{caption}</caption>}
          <thead>
            <tr>
              {columns.map(col => <th key={col} scope="col">{col}</th>)}
              {showAction && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.provider || i}>
                {rowKeys
                  ? rowKeys.map((key, j) => {
                      const isFirst = j === 0
                      const cell = row[key]
                      return (
                        <td key={key} data-label={columns[j]}>
                          {isFirst && linkFirstColumn && row.link
                            ? <a href={row.link} target="_blank" rel="noopener noreferrer sponsored">{cell}</a>
                            : cell
                          }
                        </td>
                      )
                    })
                  : (
                    <>
                      <td className="affiliate-table__provider" data-label={columns[0]}>{row.provider}</td>
                      <td data-label={columns[1]}>{row.bestFor}</td>
                      <td data-label={columns[2]}>{row.coverage}</td>
                      <td className="affiliate-table__cost" data-label={columns[3]}>{row.cost}</td>
                      <td data-label={columns[4]}><Stars rating={row.rating} /></td>
                    </>
                  )
                }
                {showAction && (
                  <td data-label="Action">
                    {row.link
                      ? <a href={row.link} className="affiliate-table__cta" target="_blank" rel="noopener noreferrer sponsored">{row.linkText}</a>
                      : '—'
                    }
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {disclaimer && <p className="affiliate-table__disclaimer">{disclaimer}</p>}
    </div>
  )
}

export default AffiliateTable
