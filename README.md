# निलेश सीड्स - Agriculture Retail Application

A comprehensive agriculture retail application connecting farmers and retailers with real-time communication, location tracking, weather updates, e-commerce, and inventory management.

## 🌟 Features

### For Farmers
- ✅ WhatsApp-style chat interface with retailer
- ✅ Real-time weather updates based on GPS location
- ✅ High-quality video calling
- ✅ Product catalog browsing
- ✅ Direct ordering system
- ✅ Order tracking
- ✅ E-receipts
- ✅ Multi-language support (Hindi, English, Marathi)

### For Retailers
- ✅ Real-time farmer location tracking (hidden from farmers)
- ✅ Chat with all farmers
- ✅ Product/inventory management
- ✅ Order management system
- ✅ Digital ledger for transactions
- ✅ Broadcast messages to farmers
- ✅ Analytics dashboard

### E-Commerce Features
- ✅ Searchable product catalog (seeds, fertilizers, equipment)
- ✅ Multiple payment options (Cash, UPI, Card, Net Banking)
- ✅ Digital transaction records
- ✅ Credit/debit tracking

## 🔐 Login Credentials

### Retailer Access
- **Username:** `Nilesh Seeds`
- **Password:** `1008`

### Farmer Access
- **Username:** Any name (e.g., "राजेश पाटील")
- **Password:** Phone number (10+ digits)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nsinvoices1008-lang/nilesh-seeds-app.git

# Navigate to project directory
cd nilesh-seeds-app

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

## 📱 Building for Production

```bash
# Create production build
npm run build

# The build folder will contain optimized production files
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://yourusername.github.io/nilesh-seeds-app"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

## 🗂️ Project Structure

```
nilesh-seeds-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LoginScreen.tsx
│   │   ├── FarmerDashboard.tsx
│   │   ├── RetailerDashboard.tsx
│   │   ├── ChatInterface.tsx
│   │   ├── WeatherWidget.tsx
│   │   ├── VideoCall.tsx
│   │   ├── ProductCatalog.tsx
│   │   ├── OrderTracking.tsx
│   │   ├── FarmerLocations.tsx
│   │   ├── ProductManagement.tsx
│   │   ├── OrderManagement.tsx
│   │   ├── DigitalLedger.tsx
│   │   └── Settings.tsx
│   ├── utils/
│   │   └── translations.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
└── README.md
```

## 🌍 Language Support

The application supports three languages:
- **हिंदी (Hindi)** - Default
- **English**
- **मराठी (Marathi)**

Users can switch languages from the login screen or settings menu.

## 📍 Location Features

- Automatic GPS location capture for farmers (requires browser permission)
- Real-time location tracking visible only to retailer
- Distance calculation between retailer and farmers
- Map integration for visual location display

## 🌤️ Weather Integration

- Real-time weather data based on farmer's location
- Temperature, humidity, wind speed
- Weather alerts and forecasts
- Crop advisory based on weather conditions

## 💳 Payment Methods

- Cash on Delivery
- UPI (PhonePe, Google Pay, Paytm)
- Credit/Debit Cards
- Net Banking

## 🔒 Security Features

- Secure login system
- Password protection
- Username uniqueness validation
- Local storage for session management
- Retailer credentials hidden from login form

## 📊 Digital Ledger

- Complete transaction history
- Credit/debit tracking
- Balance calculation
- E-receipts for all transactions
- Export functionality

## 🛠️ Technologies Used

- **Frontend:** React 18 with TypeScript
- **Styling:** CSS3 with responsive design
- **Maps:** Leaflet / React-Leaflet
- **State Management:** React Hooks
- **Storage:** LocalStorage
- **Build Tool:** Create React App

## 🔄 Future Enhancements

- [ ] Backend integration with Supabase/Firebase
- [ ] Real-time chat with WebSocket
- [ ] Push notifications
- [ ] Payment gateway integration (Razorpay/PayTM)
- [ ] Product barcode scanning
- [ ] Voice messages in chat
- [ ] Offline mode support
- [ ] Mobile app (React Native/Capacitor)
- [ ] SMS notifications
- [ ] WhatsApp Business API integration

## 📞 Support

For support and queries, contact:
- Email: support@nileshseeds.com
- Phone: +91-XXXXXXXXXX

## 📄 License

This project is proprietary software for निलेश सीड्स.

## 👨‍💻 Development

### Running Tests
```bash
npm test
```

### Code Formatting
```bash
npm run format
```

### Linting
```bash
npm run lint
```

## 🤝 Contributing

This is a private project. For contribution guidelines, please contact the development team.

---

**Made with ❤️ for Indian Farmers**

निलेश सीड्स - आपके खेती के साथी 🌾