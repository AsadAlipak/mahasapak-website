# Mahasapak Website

A modern, responsive static website built with HTML5, CSS3, and JavaScript. Fully optimized for deployment on Cloudflare Pages.

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Fast Performance**: Lightweight and optimized for quick load times
- **SEO-Friendly**: Semantic HTML and meta tags for search engine optimization
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Interactive**: Dynamic form validation, smooth scrolling, and mobile menu
- **Production-Ready**: Complete with security headers, caching, and error handling

## 🎨 Color Palette

The website uses a consistent green color scheme:

- **Primary Green**: `#2D7A4A` - Main brand color
- **Light Green**: `#7CB342` - Accent and highlights
- **White**: `#FFFFFF` - Backgrounds and text on dark backgrounds
- **Black**: `#000000` - Primary text color
- **Gray Shades**: For secondary text and borders

## 📁 File Structure

```
mahasapak-website/
├── index.html          # Homepage
├── about.html          # About page with company info and team
├── services.html       # Services page with pricing
├── contact.html        # Contact page with form and map
├── 404.html           # Custom error page
├── .htaccess          # Apache server configuration
├── cloudflare.json    # Cloudflare Pages configuration
├── .gitignore         # Git ignore file
├── README.md          # This file
├── css/
│   └── style.css      # Main stylesheet (responsive, modern)
└── js/
    └── script.js      # Interactive JavaScript features
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AsadAlipak/mahasapak-website.git
   cd mahasapak-website
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better experience:
   
   **Using Python**:
   ```bash
   # Python 3
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```
   
   **Using Node.js**:
   ```bash
   npx serve
   # Or install globally: npm install -g serve
   ```
   
   **Using PHP**:
   ```bash
   php -S localhost:8000
   ```

3. **Start editing**:
   - Edit HTML files for content changes
   - Modify `css/style.css` for styling updates
   - Update `js/script.js` for functionality changes

## ☁️ Deploy to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Choose your repository: `AsadAlipak/mahasapak-website`
   - Configure build settings:
     - **Production branch**: `main`
     - **Build command**: (leave empty)
     - **Build output directory**: `.`
   - Click **Save and Deploy**

3. **Configure Custom Domain** (Optional):
   - In your Cloudflare Pages project, go to **Custom domains**
   - Click **Set up a custom domain**
   - Enter `mahasapak.com`
   - Follow DNS configuration instructions

### Method 2: Direct Upload

1. **Prepare files**:
   ```bash
   # Create a zip of your website files
   zip -r website.zip . -x "*.git*" "README.md"
   ```

2. **Upload to Cloudflare**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** → **Create a project**
   - Select **Direct Upload**
   - Upload your zip file or drag & drop files
   - Click **Deploy**

### Method 3: Using Wrangler CLI

1. **Install Wrangler**:
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   wrangler pages deploy . --project-name=mahasapak-website
   ```

## 🎨 Customization Guide

### Updating Content

#### 1. Homepage (index.html)

**Hero Section**:
```html
<!-- Line 32-38 in index.html -->
<h1>Welcome to Mahasapak</h1>
<p>Your custom tagline here...</p>
```

**Features**:
```html
<!-- Lines 47-98 in index.html -->
<div class="card feature-card">
    <div class="card-icon feature-icon">⚡</div>
    <h3 class="card-title">Your Feature</h3>
    <p class="card-text">Your description...</p>
</div>
```

**Testimonials**:
```html
<!-- Lines 140-159 in index.html -->
<p class="testimonial-text">"Your testimonial..."</p>
<p class="testimonial-author">Client Name</p>
<p class="testimonial-role">Position, Company</p>
```

#### 2. About Page (about.html)

**Company Story**:
```html
<!-- Lines 35-45 in about.html -->
<h2>Our Story</h2>
<p>Your company story...</p>
```

**Team Members**:
```html
<!-- Lines 128-139 in about.html -->
<div class="team-photo">AS</div>
<h4 class="team-name">Team Member Name</h4>
<p class="team-position">Position</p>
```

#### 3. Services Page (services.html)

**Service Cards**:
```html
<!-- Lines 36-59 in services.html -->
<h3 class="card-title">Service Name</h3>
<p class="card-text">Service description...</p>
<ul class="service-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
</ul>
```

**Pricing**:
```html
<!-- Lines 116-146 in services.html -->
<h3 class="card-title text-center">Plan Name</h3>
<div class="service-price text-center">$999/mo</div>
```

#### 4. Contact Page (contact.html)

**Contact Information**:
```html
<!-- Lines 71-109 in contact.html -->
<p>info@mahasapak.com</p>
<p>+1 (555) 123-4567</p>
```

**Map Embed**:
```html
<!-- Line 120 in contact.html -->
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ...></iframe>
```

### Changing Colors

Edit the CSS variables in `css/style.css` (lines 14-22):

```css
:root {
    --primary-green: #2D7A4A;    /* Main brand color */
    --light-green: #7CB342;       /* Accent color */
    --white: #FFFFFF;
    --black: #000000;
    /* Add more custom colors */
}
```

### Modifying Layout

The website uses CSS Grid for responsive layouts. Adjust grid settings in `css/style.css`:

```css
.grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Change minmax values to adjust card sizes */
```

### Adding New Pages

1. **Create new HTML file** (e.g., `blog.html`):
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <!-- Copy header from any existing page -->
   <!-- Add your content -->
   <!-- Copy footer from any existing page -->
   </html>
   ```

2. **Add navigation link** in all HTML files:
   ```html
   <li><a href="blog.html" class="nav-link">Blog</a></li>
   ```

3. **Update footer** in all pages if needed

## 🔧 Technical Details

### HTML5 Features

- Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.)
- SEO meta tags (Open Graph, Twitter Cards)
- Accessible ARIA labels
- Proper heading hierarchy

### CSS3 Features

- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables)
- CSS Animations and Transitions
- Media queries for responsive design
- Mobile-first approach

### JavaScript Features

- Vanilla JavaScript (no dependencies)
- Mobile menu toggle
- Form validation with real-time feedback
- Smooth scroll navigation
- Active page highlighting
- Intersection Observer for scroll animations
- Newsletter form handling

### Performance Optimizations

- Minified CSS and organized structure
- Efficient selectors
- Lazy loading considerations
- Optimized animations
- Compressed assets (via .htaccess)
- Browser caching headers

### Security Features

- XSS Protection headers
- Clickjacking prevention
- MIME type sniffing protection
- Secure referrer policy
- Input validation and sanitization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu toggles properly
- [ ] Forms validate correctly
- [ ] All links work
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Images display properly
- [ ] No console errors
- [ ] Cross-browser compatibility

### Testing Tools

- **Lighthouse**: Test performance, accessibility, SEO
  ```bash
  # In Chrome DevTools > Lighthouse
  ```

- **Mobile Testing**: Use browser dev tools device emulation

- **Validation**:
  - [W3C HTML Validator](https://validator.w3.org/)
  - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

## 🐛 Troubleshooting

### Issue: Mobile menu not working

**Solution**: Check that `js/script.js` is properly linked in HTML and JavaScript is enabled in browser.

### Issue: Styles not applying

**Solution**: 
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check CSS file path is correct
3. Verify no CSS syntax errors

### Issue: Forms not submitting

**Solution**: Forms use JavaScript validation and prevent default submission. Check browser console for errors.

### Issue: 404 page not showing

**Solution**: 
- For local testing, you may need a local server
- On Cloudflare Pages, it's configured automatically via `cloudflare.json`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature-name`
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or issues:

- **Email**: info@mahasapak.com
- **Website**: https://mahasapak.com
- **GitHub Issues**: [Create an issue](https://github.com/AsadAlipak/mahasapak-website/issues)

## 🙏 Acknowledgments

- Icons: Unicode emoji characters (no external dependencies)
- Fonts: System fonts for fast loading
- Inspiration: Modern web design best practices

## 📋 Changelog

### Version 1.0.0 (2024)

- Initial release
- 5 HTML pages (Home, About, Services, Contact, 404)
- Responsive CSS framework
- Interactive JavaScript features
- Cloudflare Pages ready
- SEO optimized
- Accessibility compliant

---

**Built with ❤️ by Mahasapak Team**

For the latest updates, visit [mahasapak.com](https://mahasapak.com)
