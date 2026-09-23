import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Facebook,
  Forklift,
  Instagram,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Utensils,
  Users,
  X,
} from 'lucide-react';

const images = {
  hero: 'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  welcome: 'https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1400',
  thali: 'https://images.pexels.com/photos/9738992/pexels-photo-9738992.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  biryani: 'https://images.pexels.com/photos/32825907/pexels-photo-32825907.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  curry: 'https://images.pexels.com/photos/38464141/pexels-photo-38464141.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  dessert: 'https://images.pexels.com/photos/11682503/pexels-photo-11682503.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  interior: 'https://images.pexels.com/photos/6876621/pexels-photo-6876621.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1400',
  ingredients: 'https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
};

const menuItems = [
  { name: 'Garden Fresh Thali', description: 'A wholesome spread of seasonal curries, rice, breads and accompaniments.', price: '₹ SAMPLE', image: images.thali, category: 'Vegetarian Specials' },
  { name: 'Signature Dum Biryani', description: 'Fragrant basmati, delicate spices and slow-cooked goodness.', price: '₹ SAMPLE', image: images.biryani, category: 'Rice & Biryani' },
  { name: 'Bhumi Paneer Curry', description: 'Soft cottage cheese in a gently spiced, rich tomato gravy.', price: '₹ SAMPLE', image: images.curry, category: 'Main Course' },
  { name: 'Seasonal Sweet Plate', description: 'A little something sweet to finish your table on a warm note.', price: '₹ SAMPLE', image: images.dessert, category: 'Desserts' },
];

const galleryItems = [
  { image: images.hero, alt: 'Indian thali served on a wood table', className: 'gallery-tall' },
  { image: images.interior, alt: 'Warm restaurant interior with plants', className: 'gallery-wide' },
  { image: images.biryani, alt: 'Aromatic biryani in a copper bowl', className: 'gallery-square' },
  { image: images.ingredients, alt: 'Traditional meal being served', className: 'gallery-wide' },
  { image: images.curry, alt: 'Curry with naan and rice', className: 'gallery-square' },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Bhumi Natural Kitchen home">
      <span className="brand-mark" aria-hidden="true"><span>B</span><i /></span>
      <span className="brand-copy"><strong>Bhumi</strong><small>Natural Kitchen</small></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredMenu = activeCategory === 'All' ? menuItems : menuItems.filter((item) => item.category === activeCategory);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {['Home', 'About', 'Menu', 'Why Bhumi', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item === 'Why Bhumi' ? 'why-bhumi' : item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="button button-small button-primary" href="#booking">Book a Table <ArrowRight size={15} /></a>
            <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <MenuIcon />}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src={images.hero} alt="Colourful Indian thali prepared for sharing" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-kicker"><span /> Est. with care · Natural dining</div>
            <h1>Natural food.<br /><em>Authentic taste.</em></h1>
            <p>Wholesome food, natural ingredients and a warm dining experience at Bhumi Natural Kitchen.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#booking">Book a Table <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="#menu">Explore Our Menu <ArrowRight size={17} /></a>
            </div>
            <div className="trust-line"><span>Fresh ingredients</span><i>•</i><span>Natural flavours</span><i>•</i><span>Made with care</span></div>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><div /></div>
        </section>

        <section className="intro section" id="about">
          <div className="container intro-grid">
            <div className="intro-media reveal-card"><img src={images.welcome} alt="Warm, welcoming restaurant interior" /><span className="image-stamp"><Leaf size={18} /> rooted in nature</span></div>
            <div className="intro-copy">
              <div className="eyebrow">A table with heart</div>
              <h2>Welcome to <em>Bhumi</em><br />Natural Kitchen</h2>
              <p className="lead">At Bhumi Natural Kitchen, we believe great food starts with good ingredients.</p>
              <p>Our kitchen brings together fresh flavours, wholesome ingredients and thoughtful preparation to create a dining experience that feels both delicious and comforting.</p>
              <div className="highlight-list">
                {['Fresh ingredients', 'Wholesome meals', 'Made with care'].map((item) => <div key={item}><span><Check size={15} /></span>{item}</div>)}
              </div>
              <a className="text-link" href="#why-bhumi">Discover our story <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="why section section-paper" id="why-bhumi">
          <div className="container">
            <div className="section-heading centered"><div className="eyebrow">The Bhumi difference</div><h2>Why dine with us?</h2><p>Thoughtful food, genuine warmth and a place that feels good to return to.</p></div>
            <div className="feature-grid">
              {[{ icon: Leaf, title: 'Fresh & Natural', text: 'Carefully selected ingredients prepared with freshness and quality in mind.' }, { icon: Utensils, title: 'Wholesome & Delicious', text: 'Thoughtfully prepared dishes that bring together great taste and satisfying meals.' }, { icon: Sparkles, title: 'Warm Ambience', text: 'A comfortable, welcoming space for family, friends and special moments.' }, { icon: Users, title: 'Warm Hospitality', text: 'Friendly service and attention to detail from the moment you arrive.' }].map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p><span className="card-number">0{['Fresh & Natural', 'Wholesome & Delicious', 'Warm Ambience', 'Warm Hospitality'].indexOf(title) + 1}</span></article>)}
            </div>
          </div>
        </section>

        <section className="menu-section section" id="menu">
          <div className="container">
            <div className="menu-heading section-heading"><div className="eyebrow">From our kitchen</div><h2>A taste of <em>Bhumi</em></h2><p>A few favourites to begin with. Our full menu is waiting at the table.</p></div>
            <div className="category-tabs" role="tablist">{['All', 'Starters', 'Main Course', 'Vegetarian Specials', 'Rice & Biryani', 'Desserts'].map((category) => <button className={activeCategory === category ? 'active' : ''} key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
            <div className="menu-grid">{filteredMenu.map((item) => <article className="menu-card" key={item.name}><div className="menu-image"><img src={item.image} alt={item.name} /><span className="sample-tag">SAMPLE</span></div><div className="menu-card-copy"><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></div></article>)}</div>
            <p className="sample-note">* Sample menu items and prices shown for presentation. To be replaced with Bhumi's current menu.</p>
            <div className="center-cta"><a className="button button-outline" href="#booking">View Full Menu <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="signature section section-maroon">
          <div className="container"><div className="signature-top"><div className="section-heading"><div className="eyebrow eyebrow-light">Made for the middle of the table</div><h2>Our signature<br /><em>favourites</em></h2></div><p>Bring your favourite people. We’ll take care of the rest.</p></div><div className="signature-grid">{menuItems.slice(0, 3).map((item, index) => <article className={`signature-card card-${index + 1}`} key={item.name}><img src={item.image} alt={item.name} /><div className="signature-overlay"><span>{index === 1 ? "Chef's favourite" : 'Popular choice'}</span><h3>{item.name}</h3><p>{item.description}</p></div></article>)}</div></div>
        </section>

        <section className="booking section" id="booking">
          <div className="container booking-grid"><div className="booking-copy"><div className="eyebrow">Make it a Bhumi moment</div><h2>Your table<br /><em>is waiting.</em></h2><p>Planning a family dinner, a casual meal with friends, or a special evening? Reserve your table at Bhumi Natural Kitchen.</p><div className="booking-benefits"><span><Check size={14} /> Quick & easy reservation</span><span><Check size={14} /> Comfortable dine-in experience</span><span><Check size={14} /> Perfect for family & friends</span></div></div><div className="booking-form-wrap">{submitted ? <div className="success-state"><div><Check size={28} /></div><h3>Request received</h3><p>Thank you. Your table request is ready for the Bhumi team to confirm.</p><button className="text-link" onClick={() => setSubmitted(false)}>Make another request <ArrowRight size={16} /></button></div> : <form className="booking-form" onSubmit={handleSubmit}><div className="form-title"><span>Reserve your table</span><small>We’ll confirm your request shortly.</small></div><div className="form-row"><label>Name<input required placeholder="Your name" /></label><label>Phone number<input required type="tel" placeholder="Your phone number" /></label></div><div className="form-row"><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Guests<select defaultValue="2"><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5+ guests</option></select></label></div><div className="form-row"><label>Date<input required type="date" /></label><label>Time<select defaultValue="7:30 PM"><option>7:30 PM</option><option>8:00 PM</option><option>8:30 PM</option><option>9:00 PM</option></select></label></div><label>Special request <textarea placeholder="Anything we should know? (optional)" rows={3} /></label><button className="button button-primary form-submit" type="submit">Reserve My Table <ArrowRight size={17} /></button></form>}</div></div>
        </section>

        <section className="experience section section-paper"><div className="container experience-grid"><div className="experience-copy"><div className="eyebrow">The Bhumi experience</div><h2>More than<br /><em>just a meal.</em></h2><p>A place to enjoy good food, good company and a comfortable dining experience. Come as you are, stay for the stories.</p><a className="text-link" href="#gallery">See the gallery <ArrowRight size={17} /></a></div><div className="experience-media"><img src={images.ingredients} alt="Food being served at the table" /><div className="experience-note"><span><Forklift size={20} /></span><strong>Prepared with patience</strong><small>Good things take time</small></div></div></div></section>

        <section className="gallery section" id="gallery"><div className="container"><div className="section-heading gallery-heading"><div><div className="eyebrow">A glimpse inside</div><h2>Gather around.</h2></div><p>Fresh ingredients, shared plates and warm spaces made for good company.</p></div><div className="gallery-grid">{galleryItems.map((item) => <button className={`gallery-item ${item.className}`} key={item.image} onClick={() => setLightbox(item.image)}><img src={item.image} alt={item.alt} /><span>View image <ArrowRight size={15} /></span></button>)}</div></div></section>

        <section className="testimonials section section-cream"><div className="container"><div className="section-heading centered"><div className="eyebrow">Kind words</div><h2>What our guests say</h2></div><div className="testimonial-grid">{['Beautiful ambience, delicious food and very warm service. A lovely place to enjoy a relaxed meal.', 'Fresh food, comfortable atmosphere and a great place to spend time with family.', 'Really enjoyed the food and the overall dining experience.'].map((text, index) => <blockquote key={text}><Quote className="quote-mark" size={28} /><div className="stars">★★★★★</div><p>“{text}”</p><footer><span>Sample guest review</span><small>Guest {index + 1}</small></footer></blockquote>)}</div><p className="sample-note centered-note">* Sample testimonials shown for presentation. Replace with real guest reviews.</p></div></section>

        <section className="visit section" id="contact"><div className="container visit-grid"><div><div className="eyebrow">Come say hello</div><h2>Visit Bhumi<br /><em>Natural Kitchen</em></h2><p className="visit-intro">A warm table, a thoughtful plate and a little more time to enjoy both.</p><div className="contact-list"><div><MapPin size={19} /><span><strong>Restaurant address</strong>[Restaurant Address]</span></div><div><Phone size={19} /><span><strong>Call us</strong>[Phone Number]</span></div><div><Clock3 size={19} /><span><strong>Opening hours</strong>[Opening Hours]</span></div></div><div className="visit-actions"><a className="button button-primary" href="#booking">Book a Table <ArrowRight size={16} /></a><a className="button button-outline" href="tel:">Call Us</a></div></div><div className="map-placeholder"><div className="map-grid-lines" /><div className="map-pin"><MapPin size={22} /></div><div className="map-label"><span>Bhumi Natural Kitchen</span><small>[Map location placeholder]</small></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><BrandMark light /><p>Fresh ingredients, natural flavours and a warm dining experience.</p><div className="socials"><a href="#contact" aria-label="Instagram"><Instagram size={18} /></a><a href="#contact" aria-label="Facebook"><Facebook size={18} /></a><a href="#contact" aria-label="WhatsApp"><MessageCircle size={18} /></a></div></div><div className="footer-links"><h3>Explore</h3><a href="#about">About</a><a href="#menu">Menu</a><a href="#why-bhumi">Why Bhumi</a><a href="#gallery">Gallery</a></div><div className="footer-contact"><h3>Contact</h3><span>[Phone Number]</span><span>[Email Address]</span><span>[Restaurant Address]</span></div><div className="footer-hours"><h3>Opening hours</h3><span>[Opening Hours]</span><a className="button button-gold" href="#booking">Book a Table <ArrowRight size={16} /></a></div></div><div className="container footer-bottom"><span>© 2026 Bhumi Natural Kitchen. All rights reserved.</span><span>Made with care for good food.</span></div></footer>
      <a className="floating-whatsapp" href="#contact" aria-label="WhatsApp placeholder"><MessageCircle size={21} /><span>Chat with us</span></a>
      <a className="mobile-booking" href="#booking"><CalendarDays size={17} /> Book a Table</a>
      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button aria-label="Close image" onClick={() => setLightbox(null)}><X /></button><img src={lightbox} alt="Bhumi Natural Kitchen gallery" onClick={(event) => event.stopPropagation()} /></div>}
    </div>
  );
}

export default App;
