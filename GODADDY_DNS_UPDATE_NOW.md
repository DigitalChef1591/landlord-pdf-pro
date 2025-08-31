# 🚀 GoDaddy DNS Update - Step by Step

## 🎯 GOAL: Update DNS records to match Vercel's new requirements

### Current Status:
- ❌ Domain not working because DNS records are outdated
- ✅ Vercel project is ready and waiting for correct DNS

---

## 📋 EXACT RECORDS TO UPDATE

### Record 1: A Record (Root Domain)
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: `216.198.79.1` ← **NEW IP ADDRESS**
- **TTL**: 600 (or default)

### Record 2: CNAME Record (WWW)
- **Type**: CNAME  
- **Name**: www
- **Value**: `ed08573f377bfdc.vercel-dns-017.com` ← **NEW CNAME**
- **TTL**: 600 (or default)

---

## 🔧 UPDATE STEPS

### Step 1: Open GoDaddy DNS Manager
1. Go to **GoDaddy.com**
2. Click **My Products**
3. Find **landlordpdfpro.net**
4. Click **DNS** button

### Step 2: Update A Record
1. Look for the A record with Name: **@**
2. Click **Edit** (pencil icon)
3. Change Value from old IP to: **`216.198.79.1`**
4. Click **Save**

### Step 3: Update CNAME Record  
1. Look for the CNAME record with Name: **www**
2. Click **Edit** (pencil icon)
3. Change Value to: **`ed08573f377bfdc.vercel-dns-017.com`**
4. Click **Save**

### Step 4: Verify Changes
After saving both records, you should see:
```
Type    Name    Value
A       @       216.198.79.1
CNAME   www     ed08573f377bfdc.vercel-dns-017.com
```

---

## ⏱️ WHAT HAPPENS NEXT

### Immediate (0-5 minutes):
- DNS records are saved in GoDaddy
- Changes begin propagating globally

### Within 15-30 minutes:
- Your domain `https://landlordpdfpro.net` will start working
- SSL certificate will be automatically issued by Vercel
- Both `landlordpdfpro.net` and `www.landlordpdfpro.net` will work

---

## 🧪 TEST YOUR DOMAIN

After updating, test these URLs:
- `https://landlordpdfpro.net` ← Should load your app
- `https://www.landlordpdfpro.net` ← Should redirect to above
- `http://landlordpdfpro.net` ← Should redirect to HTTPS

---

## 🚨 TROUBLESHOOTING

### If domain still doesn't work after 30 minutes:
1. Check DNS propagation: `https://dnschecker.org`
2. Verify records are exactly as shown above
3. Clear browser cache (Ctrl+F5)

### Common Issues:
- **Typo in DNS values** → Double-check exact spelling
- **Old browser cache** → Try incognito/private mode
- **DNS not propagated yet** → Wait 15-30 more minutes

---

## ✅ SUCCESS INDICATORS

You'll know it worked when:
- ✅ `https://landlordpdfpro.net` loads your Landlord PDF Pro app
- ✅ Professional URL instead of Vercel subdomain
- ✅ Green lock icon (SSL certificate working)
- ✅ Ready to make money with your custom domain!

---

**🎯 ACTION REQUIRED**: Go update those 2 DNS records in GoDaddy now!
