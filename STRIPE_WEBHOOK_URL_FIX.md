# 🔧 Stripe Webhook URL - Quick Fix Needed

## ⚠️ Almost Perfect - One Small Fix!

I can see your webhook configuration, but the URL needs a small addition.

## 🔍 Current URL (Incomplete):
```
https://landlord-pdf-pro-8pzvfi4up-digitalchef1591s-projects.vercel.app
```

## ✅ Correct URL (Add the API path):
```
https://landlord-pdf-pro-8pzvfi4up-digitalchef1591s-projects.vercel.app/api/stripe/webhook
```

## 📝 Quick Fix:
1. Click in the **Endpoint URL** field
2. Go to the end of the URL
3. Add: `/api/stripe/webhook`
4. The complete URL should be: `https://landlord-pdf-pro-8pzvfi4up-digitalchef1591s-projects.vercel.app/api/stripe/webhook`

## 🚀 After Fixing:
Click the purple **"Create destination"** button to create your webhook!

## 🔑 Next Step:
After creating the webhook, you'll get a **webhook secret** (starts with `whsec_...`) - make sure to copy it! You'll need to add this to Vercel as the `STRIPE_WEBHOOK_SECRET` environment variable.

---

**Action Needed**: Add `/api/stripe/webhook` to the end of your URL, then click "Create destination"
