# 🚀 CORRECT ORDER: Connect landlordpdfpro.net to Vercel

## You Haven't Connected It Yet - That's Fine!

Here's the correct order to do this:

## Step 1: Add Domain to Vercel FIRST (2 minutes)
1. Go to **Vercel Dashboard** → Your Project
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter: `landlordpdfpro.net`
5. Click **Add**
6. Vercel will show you the exact DNS records you need
7. **KEEP THIS PAGE OPEN** - you'll copy these values

## Step 2: Go to GoDaddy and Replace Default Records (5 minutes)
1. Go to **GoDaddy.com** → My Products → landlordpdfpro.net → **DNS**
2. You'll see default GoDaddy records (that's what's causing the conflict)
3. **DELETE** all existing records:
   - Any A records
   - Any CNAME records (including www)
   - Any forwarding/parking records
4. **ADD** the exact records Vercel shows you:
   - A record: @ → `76.76.19.61`
   - CNAME: www → `cname.vercel-dns.com`

## Step 3: Save & Wait (10-30 minutes)
1. Click **Save** in GoDaddy
2. Wait 10-30 minutes for DNS propagation
3. Test: `https://landlordpdfpro.net`

## 🎯 Why You Saw the Conflict Error

GoDaddy automatically creates default DNS records for new domains (like parking pages, forwarding, etc.). These conflict with Vercel's records, so you need to delete them first.

## 🚨 DO THIS RIGHT NOW:

1. **Vercel**: Add `landlordpdfpro.net` to your project domains
2. **Copy** the exact DNS records Vercel shows you
3. **GoDaddy**: Delete all existing records, add Vercel's records
4. **Wait**: 10-30 minutes
5. **Test**: Visit your new professional URL!

---

**Result**: `https://landlordpdfpro.net` will show your Landlord PDF Pro website!
