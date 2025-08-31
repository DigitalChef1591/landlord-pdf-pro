# 🎯 Stripe Webhook - Final Configuration

## ✅ Perfect Progress!
I can see you've successfully selected `checkout.session.completed` and you're now in the final configuration screen!

## 📝 What You Need to Fill In

### 1. Endpoint URL (Required)
In the **"Endpoint URL"** field that currently shows `https://`, you need to enter your Vercel deployment URL.

**Format**: `https://your-vercel-url.vercel.app/api/stripe/webhook`

### 2. Find Your Vercel URL
If you don't know your Vercel URL:
1. Open a new tab and go to: https://vercel.com/dashboard
2. Find your "landlord-pdf-pro" project
3. Click on it
4. Copy the deployment URL (something like `https://landlord-pdf-pro-abc123.vercel.app`)

### 3. Complete the URL
Add `/api/stripe/webhook` to the end of your Vercel URL.

**Example**:
If your Vercel URL is: `https://landlord-pdf-pro-abc123.vercel.app`
Then enter: `https://landlord-pdf-pro-abc123.vercel.app/api/stripe/webhook`

### 4. Optional Fields
- **Destination name**: You can keep "playful-glow" or change it to "Landlord PDF Pro Webhook"
- **Description**: Optional, you can add "Payment completion webhook for Landlord PDF Pro"

### 5. Create the Webhook
Click the purple **"Create destination"** button

## 🔑 After Creating
You'll get a **webhook secret** (starts with `whsec_...`) - copy this! You'll need to add it to Vercel as `STRIPE_WEBHOOK_SECRET`.

## 🚀 Next Step
Enter your Vercel webhook URL in the Endpoint URL field and click "Create destination"!

---

**Current Step**: Enter your Vercel URL + `/api/stripe/webhook` in the Endpoint URL field
