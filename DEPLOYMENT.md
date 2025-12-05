# निलेश सीड्स - Deployment Guide

## 🚀 Quick Deployment

### Method 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
cd nilesh-seeds-app
vercel
```

3. **Follow prompts:**
   - Link to existing project? No
   - Project name: nilesh-seeds-app
   - Directory: ./
   - Build command: npm run build
   - Output directory: build

4. **Your app will be live at:** `https://nilesh-seeds-app.vercel.app`

### Method 2: Netlify

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Build and Deploy:**
```bash
npm run build
netlify deploy --prod
```

3. **Drag and drop the `build` folder** or use CLI

### Method 3: GitHub Pages

1. **Add to package.json:**
```json
{
  "homepage": "https://nsinvoices1008-lang.github.io/nilesh-seeds-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

2. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

3. **Deploy:**
```bash
npm run deploy
```

## 📱 Mobile App Deployment

### Convert to Mobile App using Capacitor

1. **Install Capacitor:**
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

2. **Add platforms:**
```bash
npm install @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios
```

3. **Build and sync:**
```bash
npm run build
npx cap sync
```

4. **Open in Android Studio / Xcode:**
```bash
npx cap open android
npx cap open ios
```

## 🔧 Environment Setup

### For Production

Create `.env.production`:
```
REACT_APP_API_URL=https://your-backend-api.com
REACT_APP_WEATHER_API_KEY=your_weather_api_key
REACT_APP_MAPS_API_KEY=your_maps_api_key
```

### Backend Integration (Supabase)

1. **Create Supabase Project:** https://supabase.com

2. **Create Tables:**
```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT CHECK (role IN ('farmer', 'retailer')),
  location JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID REFERENCES users(id),
  receiver_id UUID REFERENCES users(id),
  text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  name_hindi TEXT,
  name_marathi TEXT,
  category TEXT,
  price DECIMAL(10,2),
  stock INTEGER,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  farmer_id UUID REFERENCES users(id),
  total DECIMAL(10,2),
  status TEXT CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Transactions table
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  farmer_id UUID REFERENCES users(id),
  amount DECIMAL(10,2),
  type TEXT CHECK (type IN ('credit', 'debit')),
  description TEXT,
  balance DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
);
```

3. **Add Supabase credentials to .env:**
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🔐 Security Checklist

- [ ] Change default retailer credentials
- [ ] Implement proper authentication
- [ ] Add HTTPS/SSL certificate
- [ ] Enable CORS properly
- [ ] Sanitize user inputs
- [ ] Implement rate limiting
- [ ] Add password hashing (bcrypt)
- [ ] Enable two-factor authentication
- [ ] Regular security audits

## 📊 Performance Optimization

1. **Enable code splitting:**
```javascript
const ProductCatalog = React.lazy(() => import('./components/ProductCatalog'));
```

2. **Add service worker for offline support**

3. **Optimize images:**
```bash
npm install --save-dev imagemin imagemin-webp
```

4. **Enable gzip compression**

## 🔔 Push Notifications Setup

### Using Firebase Cloud Messaging

1. **Install Firebase:**
```bash
npm install firebase
```

2. **Initialize Firebase:**
```javascript
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  // Your config
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
```

## 💳 Payment Gateway Integration

### Razorpay Integration

1. **Install Razorpay:**
```bash
npm install razorpay
```

2. **Add to .env:**
```
REACT_APP_RAZORPAY_KEY_ID=your_key_id
REACT_APP_RAZORPAY_KEY_SECRET=your_key_secret
```

## 📞 Video Calling Setup

### Using Agora

1. **Install Agora SDK:**
```bash
npm install agora-rtc-sdk-ng
```

2. **Add credentials:**
```
REACT_APP_AGORA_APP_ID=your_app_id
```

## 🌐 Domain Setup

1. **Purchase domain** from GoDaddy, Namecheap, etc.

2. **Configure DNS:**
   - Add A record pointing to your server IP
   - Add CNAME for www subdomain

3. **SSL Certificate:**
   - Use Let's Encrypt (free)
   - Or Cloudflare SSL

## 📈 Analytics Setup

### Google Analytics

1. **Add to public/index.html:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🐛 Debugging

### Common Issues

1. **Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

2. **Location not working:**
   - Ensure HTTPS is enabled
   - Check browser permissions

3. **Chat not persisting:**
   - Check localStorage quota
   - Clear browser cache

## 📞 Support

For deployment issues:
- Email: dev@nileshseeds.com
- GitHub Issues: https://github.com/nsinvoices1008-lang/nilesh-seeds-app/issues

---

**Happy Deploying! 🚀**