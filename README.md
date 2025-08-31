# Landlord Move-In/Out PDF Pro

A professional property inspection application built as a monorepo targeting web (Next.js + Stripe) and mobile (Expo React Native + RevenueCat) platforms.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account
- Stripe account

### Development Setup

1. **Clone and Install**
```bash
git clone <repository-url>
cd LandLord
pnpm install
```

2. **Environment Variables**
```bash
cd apps/web
cp .env.example .env.local
# Fill in your Supabase and Stripe credentials
```

3. **Database Setup**
```bash
# Run the SQL schema in your Supabase project
# File: infra/supabase/schema.sql
```

4. **Start Development**
```bash
pnpm dev
```

Visit http://localhost:3000 to see the application.

## 🏗️ Architecture

### Monorepo Structure
```
├── apps/
│   ├── web/              # Next.js 14 App Router (TypeScript)
│   └── mobile/           # Expo React Native + Expo Router (TypeScript)
├── packages/
│   ├── ui/               # Shared UI components (shadcn/ui)
│   ├── core/             # Shared types, validation (Zod), hooks
│   └── pdf/              # PDF generation (@react-pdf/renderer)
├── infra/
│   └── supabase/         # Database schema & RLS policies
```

### Tech Stack
- **Frontend**: Next.js 14, React 19, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Lucide React icons
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Payments**: Stripe (web) + RevenueCat (mobile)
- **PDF Generation**: @react-pdf/renderer
- **Build System**: Turborepo + pnpm workspaces

## 💰 Revenue Model

### Web Platform ($29 one-time)
- Stripe Checkout integration
- Immediate payment processing
- Webhook-based entitlement updates

### Mobile Apps (In-App Purchase)
- RevenueCat non-consumable unlock
- Cross-platform purchase recognition
- Restore purchases functionality

## 🎯 Features

### ✅ Completed (Production Ready)
- **Professional Landing Page** - Conversion-optimized with clear pricing
- **Demo Builder** - Full 4-step inspection workflow (Property → Inspection → Rooms → Export)
- **Stripe Integration** - Complete payment processing with webhooks
- **Database Schema** - Supabase with RLS policies and storage buckets
- **PDF Generation System** - Server-side rendering with @react-pdf/renderer
- **UI Component System** - shadcn/ui with design tokens
- **TypeScript Coverage** - Full type safety with Zod validation

### 🚧 In Development
- **Authentication System** - Supabase Auth with magic links
- **User Dashboard** - Inspection library, settings, business info
- **Mobile Apps** - Expo React Native with RevenueCat
- **Production Deployment** - Vercel + EAS builds

## 🔧 Production Deployment

### 1. Supabase Setup
```sql
-- Run the complete schema
-- File: infra/supabase/schema.sql

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('photos', 'photos', false),
  ('signatures', 'signatures', false),
  ('exports', 'exports', false);
```

### 2. Stripe Configuration
1. Create product in Stripe Dashboard
2. Set up webhook endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Configure webhook events: `checkout.session.completed`
4. Copy webhook secret and price ID to environment variables

### 3. Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/web
vercel --prod

# Set environment variables in Vercel dashboard
```

### 4. Environment Variables (Production)
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
STRIPE_SECRET_KEY=sk_live_your_live_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
NEXT_PUBLIC_STRIPE_PRICE_ID=price_your_price_id

# App
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your_production_secret
```

## 📱 Mobile App Development

### Expo Setup
```bash
cd apps/mobile
npx expo install
npx expo start
```

### RevenueCat Integration
1. Create RevenueCat account
2. Set up non-consumable product: "landlord_pro"
3. Configure webhook: `https://yourdomain.com/api/revenuecat/webhook`
4. Add API keys to environment variables

### EAS Build
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure
eas build:configure

# Build for stores
eas build --platform all --profile production
```

## 🧪 Testing

### Unit Tests
```bash
pnpm test
```

### E2E Tests
```bash
# Web (Playwright)
pnpm test:e2e:web

# Mobile (Detox)
pnpm test:e2e:mobile
```

## 📊 Key Metrics & Analytics

### Revenue Tracking
- Stripe Dashboard: Payment analytics
- RevenueCat Dashboard: Mobile subscription metrics
- Supabase: User growth and engagement

### User Analytics
- Track inspection creation rates
- PDF export frequency
- Feature usage patterns
- Conversion funnel optimization

## 🔒 Security & Compliance

### Data Protection
- Row Level Security (RLS) policies
- Encrypted storage for sensitive data
- GDPR compliance features
- Secure payment processing (PCI DSS)

### Authentication
- Magic link authentication (passwordless)
- Session management with Supabase Auth
- Cross-platform session sync

## 🚀 Performance Optimization

### Web Performance
- Next.js App Router with streaming
- Image optimization and compression
- PDF generation caching
- CDN delivery via Vercel

### Mobile Performance
- Expo optimizations
- Offline draft storage
- Image compression before upload
- Background sync capabilities

## 📈 Scaling Considerations

### Database
- Supabase auto-scaling
- Connection pooling
- Read replicas for analytics

### Storage
- Supabase Storage with CDN
- Automatic image optimization
- PDF archival strategies

### Monitoring
- Vercel Analytics
- Supabase monitoring
- Error tracking (Sentry)
- Performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

- **Email**: support@landlordpdfpro.com
- **Documentation**: [docs.landlordpdfpro.com](https://docs.landlordpdfpro.com)
- **Status Page**: [status.landlordpdfpro.com](https://status.landlordpdfpro.com)

---

**Built with ❤️ for landlords and property managers worldwide**
