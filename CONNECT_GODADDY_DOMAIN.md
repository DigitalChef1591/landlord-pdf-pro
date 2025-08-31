# 🚀 Connect Your GoDaddy Domain to Vercel

## Step-by-Step Guide (10 minutes)

### Step 1: Add Domain to Vercel (2 minutes)
1. Go to **Vercel Dashboard** → Your Project
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter your domain: `yourdomain.com` (whatever you own on GoDaddy)
5. Click **Add**
6. Vercel will show you DNS records to add - **KEEP THIS PAGE OPEN**

### Step 2: Configure DNS in GoDaddy (5 minutes)
1. Go to **GoDaddy.com** and sign in
2. Go to **My Products** → **All Products and Services**
3. Find your domain and click **DNS** (or **Manage DNS**)
4. You'll see a list of DNS records

### Step 3: Add Vercel DNS Records (3 minutes)
Vercel will show you records like this - add them to GoDaddy:

**For Root Domain (yourdomain.com):**
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: `76.76.19.61` (Vercel's IP)
- **TTL**: 600 (or default)

**For WWW (www.yourdomain.com):**
- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com`
- **TTL**: 600 (or default)

### Step 4: Delete Conflicting Records
In GoDaddy DNS, **DELETE** any existing:
- A records pointing to @ or root
- CNAME records for www
- Any "Parked" or "Forwarding" records

### Step 5: Save & Wait (5-30 minutes)
1. Click **Save** in GoDaddy
2. Go back to Vercel - it should show "Valid Configuration"
3. Wait 5-30 minutes for DNS propagation
4. Test your domain: `https://yourdomain.com`

## 🔧 Troubleshooting

### If Domain Doesn't Work:
1. **Check DNS Propagation**: Use whatsmydns.net
2. **Clear Browser Cache**: Hard refresh (Ctrl+F5)
3. **Wait Longer**: Can take up to 48 hours (usually 10-30 minutes)

### Common GoDaddy Issues:
- **Parked Domain**: Disable domain parking in GoDaddy
- **Forwarding**: Remove any domain forwarding
- **Wrong Records**: Make sure A record points to `76.76.19.61`

## 📋 Quick Checklist

- [ ] Added domain to Vercel
- [ ] Added A record: @ → `76.76.19.61`
- [ ] Added CNAME: www → `cname.vercel-dns.com`
- [ ] Deleted conflicting records
- [ ] Saved changes in GoDaddy
- [ ] Waited 10+ minutes
- [ ] Tested domain in browser

## 🎯 Expected Result

After setup, your website will be live at:
- `https://yourdomain.com`
- `https://www.yourdomain.com`

Both will show your Landlord PDF Pro website with SSL certificate automatically!

---

**What's your GoDaddy domain name?** I can give you more specific instructions once I know the exact domain.
