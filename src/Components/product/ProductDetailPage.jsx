import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './productdetail.css';
import productData from '../../data/productdetail.json';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Changed from productName to productId
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log('Looking for product ID:', productId);
      console.log('Available products:', productData.map(p => ({ id: p.id, title: p.title })));
      
      // Handle both array and object with products property
      const productList = Array.isArray(productData) ? productData : (productData.products || []);
      
      // Find product by ID
      let foundProduct = productList.find(
        (p) => p.id === productId || p.id === parseInt(productId)
      );
      
      // Fallback: try to find by title if ID doesn't work
      if (!foundProduct) {
        foundProduct = productList.find(
          (p) => p.title.toLowerCase().replace(/\s+/g, '-') === productId.toLowerCase()
        );
      }
      
      // Another fallback: try direct title match
      if (!foundProduct) {
        foundProduct = productList.find(
          (p) => p.title.toLowerCase() === productId.toLowerCase().replace(/-/g, ' ')
        );
      }

      if (!foundProduct) {
        throw new Error(`Product with ID "${productId}" not found`);
      }

      console.log('Found product:', foundProduct.title);
      setProduct(foundProduct);
    } catch (error) {
      console.error('Error loading product detail:', error);
      setError(`Failed to load product details for "${productId}". Please try again later.`);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="detail-page">
        <div className="loading-container">
          <div className="loading-spinner large"></div>
          <p>Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="detail-page">
        <div className="error-container">
          <h2>Product Not Found</h2>
          <p>{error}</p>
          <p>Available products: {productData.map(p => p.title).join(', ')}</p>
          <Link to="/Products" className="back-btn">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <nav className="breadcrumb">
          <Link to="/Products">Products</Link>
          <span className="separator">›</span>
          <span>{product.title}</span>
        </nav>

        <div className="product-detail-hero">
          <div className="hero-content">
            <h1 className="detail-title">{product.title}</h1>
            <p className="detail-description">{product.description}</p>

            <div className="hero-actions">
              <a
                href={product.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                Visit {product.title}
              </a>
              <Link to="/Contact-us" className="secondary-btn">Contact Us</Link>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={product.image}
              alt={product.title}
              className="product-hero-img"
              onError={(e) => {
                console.error('Image failed to load:', product.image);
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        <div className="product-details-content">
          {/* Key Features Section */}
          {product.keyFeatures && (
            <section className="features-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                {product.keyFeatures.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3>{feature}</h3>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* About Section */}
          <section className="about-section">
            <h2>About {product.title}</h2>
            <div className="about-content">
              <p>{product.description}</p>
              {product.benefits && (
                <p><strong>Benefits:</strong> {product.benefits}</p>
              )}
            </div>
          </section>

          {/* Technologies Section */}
          {product.technologies && (
            <section className="tech-section">
              <h2>Technologies Used</h2>
              <div className="tech-grid">
                {product.technologies.map((tech, index) => (
                  <div key={index} className="tech-card">
                    <h4>{tech}</h4>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {product.faqs && (
            <section className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {product.faqs.map((faq, index) => (
                  <details key={index} className="faq-item">
                    <summary>{faq.question}</summary>
                    <div className="faq-content">
                      <div>{faq.answer}</div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Start using {product.title} today and transform your workflow.</p>
              <div className="cta-actions">
                <a
                  href={product.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn large"
                >
                  Visit {product.title}
                </a>
                <Link to="/Contact-us" className="secondary-btn large">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Floating scroll cue image at bottom center */}
      <div className="scroll-cue" aria-hidden="true" />
    </div>
  );
};

export default ProductDetailPage;