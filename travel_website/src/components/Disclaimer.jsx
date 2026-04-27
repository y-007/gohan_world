import React from 'react'

const cards = [
  {
    title: 'Affiliate Links',
    body: 'This website contains affiliate links. If you purchase a travel insurance policy or any product through links on this site, we may earn a commission at no additional cost to you. Our editorial recommendations are independent and based on our own research and experience — we only recommend products and services we genuinely believe in.',
  },
  {
    title: 'Email & Newsletter',
    body: 'Some links included in our newsletter emails are affiliate links. We may earn a commission if you make a purchase through those links. This does not affect our editorial independence or the recommendations we make. We will always clearly identify sponsored content where applicable.',
  },
  {
    title: 'Editorial Independence',
    body: "All content on Gohan World — including destination guides, travel tips, and insurance recommendations — reflects our honest opinions. Affiliate relationships do not influence which products we feature, how we rank them, or what we write about them. Our readers' trust is our top priority.",
  },
  {
    title: 'No Professional Advice',
    body: 'The information on this site is provided for general informational purposes only. It does not constitute professional financial, legal, or insurance advice. Always read the full policy documents and consult a licensed professional before making any insurance or financial decisions.',
  },
]

const Disclaimer = () => (
  <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '2rem', marginBottom: '40px' }}>Disclaimer</h1>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '24px',
    }}>
      {cards.map((card) => (
        <div key={card.title} style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '24px',
          backgroundColor: '#fff',
        }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '12px' }}>
            {card.title}
          </h2>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#444' }}>
            {card.body}
          </p>
        </div>
      ))}
    </div>

    <p style={{ marginTop: '40px', fontSize: '0.85rem', color: '#888' }}>
      For questions about our affiliate relationships or content policies, please
      reach out via the newsletter signup below. Last updated:{' '}
      {new Date().getFullYear()}.
    </p>
  </section>
)

export default Disclaimer