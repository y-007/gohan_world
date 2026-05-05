import React from 'react'
import AffiliateCard from './AffiliateCard'
import AffiliateTable from './AffiliateTable'
import InsuranceDisclosure from './InsuranceDisclosure'
import './ArticleRenderer.css'

const ArticleRenderer = ({ blocks }) => (
  <div className="article-body">
    {blocks.map((block, i) => {
      switch (block.type) {
        case 'paragraph':
          return block.html
            ? <p key={i} className="article-body__p" dangerouslySetInnerHTML={{ __html: block.text }} />
            : <p key={i} className="article-body__p">{block.text}</p>
        case 'h2':
          return <h2 key={i} className="article-body__h2">{block.text}</h2>
        case 'h3':
          return block.html
            ? <h3 key={i} className="article-body__h3" dangerouslySetInnerHTML={{ __html: block.text }} />
            : <h3 key={i} className="article-body__h3">{block.text}</h3>
        case 'list':
          return (
            <ul key={i} className="article-body__list">
              {block.items.map((item, j) =>
                block.html
                  ? <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  : <li key={j}>{item}</li>
              )}
            </ul>
          )
        case 'tip':
          return (
            <div key={i} className="article-body__tip">
              <span className="article-body__tip-icon">💡</span>
              <p>{block.text}</p>
            </div>
          )
        case 'image':
          return (
            <figure key={i} className="article-body__figure">
              <img src={block.src} alt={block.alt} />
              {block.caption && <figcaption>{block.caption}</figcaption>}
            </figure>
          )
        case 'affiliate_card':
          return <AffiliateCard key={i} {...block} />
        case 'affiliate_table':
          return <AffiliateTable key={i} {...block} />
        case 'insurance_disclosure':
          return <InsuranceDisclosure key={i} />
        default:
          return null
      }
    })}
  </div>
)

export default ArticleRenderer
