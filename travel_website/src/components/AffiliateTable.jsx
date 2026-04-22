import React from 'react'
import './AffiliateTable.css'

const Stars = ({ rating }) => (
  <span className="affiliate-table__stars" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'star star--filled' : 'star'}>★</span>
    ))}
  </span>
)

const AffiliateTable = ({ caption, disclaimer, columns, rows }) => (
  <div className="affiliate-table-wrapper">
    <div className="affiliate-table__scroll">
      <table className="affiliate-table">
        {caption && <caption className="affiliate-table__caption">{caption}</caption>}
        <thead>
          <tr>
            {columns.map(col => <th key={col} scope="col">{col}</th>)}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.provider}>
              <td className="affiliate-table__provider">{row.provider}</td>
              <td>{row.bestFor}</td>
              <td>{row.coverage}</td>
              <td className="affiliate-table__cost">{row.cost}</td>
              <td><Stars rating={row.rating} /></td>
              <td>
                <a
                  href={row.link}
                  className="affiliate-table__cta"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  {row.linkText}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {disclaimer && <p className="affiliate-table__disclaimer">{disclaimer}</p>}
  </div>
)

export default AffiliateTable
