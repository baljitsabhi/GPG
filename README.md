# GPG Phone Hub Website

A modern, responsive website for GPG Phone Hub - your trusted phone repair shop in Melbourne, offering fast repairs and premium accessories.

## 🌟 Features

### 📱 **Professional Phone Repair Services**
- Screen replacement and repair
- Battery replacement
- Water damage restoration
- Charging port repair
- Camera repair
- Software solutions

### 🛍️ **Product Showcase**
- Phone covers and cases
- Smart watches
- AirPods and headphones
- Phone stands and accessories
- Power banks and chargers
- Gaming accessories

### 🎨 **Modern Design**
- Fully responsive design (mobile-first approach)
- Professional color scheme with brand colors
- Interactive hero slider
- Smooth animations and transitions
- Card-based layout for better UX

### 📞 **Contact & Support**
- Multiple contact methods (phone, email, in-store)
- Interactive contact form with service selection
- Google Maps integration
- FAQ section with accordion functionality
- Opening hours display

## 🚀 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **Google Maps API** - Location integration
- **Netlify Forms** - Contact form handling

## 📁 Project Structure

```
GPG/
├── index.html          # Main website file
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets
│   ├── logo.jpg        # Company logo
│   ├── products/       # Product images
│   └── ...             # Other images
├── assests/            # Additional assets
├── package.json        # Node.js dependencies
└── README.md           # Project documentation
```

## 🎯 Key Sections

### 1. **Hero Section**
- Interactive image slider
- Call-to-action buttons
- Responsive design for all devices

### 2. **Services Section**
- Professional repair services grid
- Service descriptions and features
- Hover effects and animations

### 3. **Products Section**
- Product showcase with images
- Expandable "View More" functionality
- Responsive grid layout

### 4. **Contact Section**
- Contact information cards
- Interactive contact form
- Google Maps integration
- Multiple contact methods

### 5. **FAQ Section**
- Accordion-style FAQ
- Interactive expand/collapse
- Comprehensive Q&A coverage

## 🎨 Design Features

### **Color Scheme**
- **Primary Color**: #090067 (Deep Blue)
- **Secondary Color**: #38bdf8 (Light Blue)
- **Accent Colors**: Various grays and whites

### **Typography**
- **Primary Font**: Granjon Roman (with fallbacks)
- **Fallback Fonts**: EB Garamond, Inter, serif
- **Responsive scaling** across all devices

### **Responsive Breakpoints**
- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: 1280px+

## 🛠️ Setup & Installation

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Node.js (for development)

### Installation
1. Clone or download the project
2. Open `index.html` in your browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 📱 Mobile Optimization

- **Mobile-first design** approach
- **Touch-friendly** interface elements
- **Responsive images** and content
- **Optimized performance** for mobile devices
- **Fast loading times** with preloaded images

## 🔧 Customization

### **Colors**
Update the color scheme in `index.html`:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#090067',    // Your brand color
        secondary: '#38bdf8',  // Accent color
      }
    }
  }
}
```

### **Content**
- Update contact information in the contact section
- Modify service descriptions in the services section
- Add/remove products in the products section
- Update FAQ content as needed

### **Images**
- Replace images in the `images/` folder
- Update image paths in HTML
- Optimize images for web (WebP format recommended)

## 📞 Contact Information

**GPG Phone Hub**
- **Address**: Highpoint Shopping Centre, Level 2, Kiosk-7223, 120-200 Rosamond Rd, Maribyrnong VIC 3032
- **Phone**: 0452 111 266
- **Landline**: 03 9317 9024
- **Email**: info@gpgphonehub.com.au

### **Opening Hours**
- **Sunday**: 10:00 AM – 5:00 PM
- **Monday-Wednesday**: 9:00 AM – 6:00 PM
- **Thursday-Friday**: 9:00 AM – 9:00 PM
- **Saturday**: 9:00 AM – 6:00 PM

## 🚀 Deployment

### **Netlify (Recommended)**
1. Connect your GitHub repository to Netlify
2. Set build command: `# No build step required`
3. Set publish directory: `/`
4. Deploy automatically on push

### **Other Hosting Options**
- **GitHub Pages**: Free static hosting
- **Vercel**: Fast deployment with Git integration
- **Traditional Web Hosting**: Upload files via FTP

## 🔍 SEO Features

- **Semantic HTML** structure
- **Meta tags** for search engines
- **Alt text** for all images
- **Structured data** ready
- **Fast loading** optimized
- **Mobile-friendly** design

## 📈 Performance

- **Optimized images** with proper sizing
- **Minified CSS** and JavaScript
- **Lazy loading** for images
- **Preloaded** critical resources
- **Fast loading** on all devices

## 🛡️ Security

- **Form validation** on client and server side
- **HTTPS ready** for secure connections
- **No sensitive data** exposed in code
- **Secure form handling** with Netlify

## 📝 License

This project is proprietary to GPG Phone Hub. All rights reserved.

## 🤝 Support

For technical support or questions about this website:
- **Email**: info@gpgphonehub.com.au
- **Phone**: 0452 111 266

---

**Built with ❤️ for GPG Phone Hub** - Your trusted phone repair specialists in Melbourne.
