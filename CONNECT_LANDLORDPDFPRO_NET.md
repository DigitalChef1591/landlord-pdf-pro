# 🚀 Connect landlordpdfpro.net to Vercel - EXACT STEPS

## Your Domain: `landlordpdfpro.net`

### Step 1: Add Domain to Vercel (2 minutes)
1. Go to **Vercel Dashboard** → Your Project (landlord-pdf-pro)
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter: `landlordpdfpro.net`
5. Click **Add**
6. Also add: `www.landlordpdfpro.net`
7. **KEEP THIS PAGE OPEN** - you'll need the DNS info

### Step 2: Go to GoDaddy DNS (1 minute)
1. Go to **GoDaddy.com** and sign in
2. Go to **My Products** → **All Products and Services**
3. Find **landlordpdfpro.net** and click **DNS**
4. You'll see your current DNS records

### Step 3: Add These EXACT Records in GoDaddy (5 minutes)

**Record 1 - Root Domain:**
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: `76.76.19.61`
- **TTL**: 600

**Record 2 - WWW Subdomain:**
- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com`
- **TTL**: 600

### Step 4: Delete Conflicting Records (IMPORTANT!)
In GoDaddy, **DELETE** any existing:
- A records pointing to @
- CNAME records for www
- Any "Parked" records
- Any forwarding/redirect records

### Step 5: Save & Test (10-30 minutes)
1. Click **Save** in GoDaddy
2. Go back to Vercel - should show "Valid Configuration"
3. Wait 10-30 minutes for DNS to propagate
4. Test: `https://landlordpdfpro.net`
5. Test: `https://www.landlordpdfpro.net`

## 🎯 Expected Result

After setup (10-30 minutes), your website will be live at:
- **https://landlordpdfpro.net** ← Your main URL
- **https://www.landlordpdfpro.net** ← Also works

Both will show your Landlord PDF Pro website with automatic SSL!

## 🔧 If It Doesn't Work

1. **Check DNS**: Go to whatsmydns.net, enter `landlordpdfpro.net`
2. **Wait Longer**: Can take up to 2 hours (usually 10-30 minutes)
3. **Clear Cache**: Hard refresh browser (Ctrl+F5)
4. **Check GoDaddy**: Make sure no parking/forwarding is enabled

## 📋 Quick Checklist

- [ ] Added `landlordpdfpro.net` to Vercel
- [ ] Added `www.landlordpdfpro.net` to Vercel
- [ ] Added A record: @ → `76.76.19.61` in GoDaddy
- [ ] Added CNAME: www → `cname.vercel-dns.com` in GoDaddy
- [ ] Deleted any conflicting records in GoDaddy
- [ ] Saved changes in GoDaddy
- [ ] Waited 10+ minutes
- [ ] Tested both URLs

## 🚨 URGENT: Do This NOW!

1. **Vercel**: Add `landlordpdfpro.net` to your project domains
2. **GoDaddy**: Add the A and CNAME records above
3. **Wait**: 10-30 minutes for DNS propagation
4. **Test**: Visit `https://landlordpdfpro.net`

Your professional domain will be live soon!

---

**From**: `https://landlord-pdf-pro-kayod3puz-digitalchef1591s-projects.vercel.app/`
**To**: `https://landlordpdfpro.net/` ← MUCH BETTER!
