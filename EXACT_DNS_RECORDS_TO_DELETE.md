# 🎯 EXACT DNS Records to Delete - landlordpdfpro.net

## Current Records Analysis
Looking at your DNS records, I can see the issue:

## ✅ KEEP These Records (Already Correct):
```
Type: A
Name: @
Data: 76.76.19.61
TTL: 600 seconds
```

```
Type: CNAME
Name: www
Data: cname.vercel-dns.com.
TTL: 600 seconds
```

## 🚨 DELETE This Record (Causing Conflict):
```
Type: A
Name: @
Data: WebsiteBuilder Site
TTL: 1 Hour
```

## ✅ KEEP These Records (Don't Touch):
- **NS records** (ns13.domaincontrol.com, ns14.domaincontrol.com) - KEEP
- **SOA record** - KEEP
- **TXT record** (_dmarc) - KEEP
- **CNAME** (_domainconnect) - KEEP
- **CNAME** (pay) - KEEP (unless you don't need it)

## 🚀 EXACT STEPS RIGHT NOW:

### Step 1: Delete the Conflicting A Record
1. Find this record: **Type A, Name @, Data "WebsiteBuilder Site"**
2. **DELETE** this record only
3. Keep the other A record (@ → 76.76.19.61)

### Step 2: Save Changes
1. Click **Save** in GoDaddy
2. Wait 10-30 minutes

### Step 3: Test
1. Visit: `https://landlordpdfpro.net`
2. Should show your Landlord PDF Pro website!

## 🎯 What You Should Have After Deletion:
```
✅ Type A    | Name @   | Data 76.76.19.61
✅ Type CNAME| Name www | Data cname.vercel-dns.com
✅ Type NS   | Name @   | Data ns13.domaincontrol.com
✅ Type NS   | Name @   | Data ns14.domaincontrol.com
✅ Type SOA  | Name @   | Data Primary nameserver...
✅ Type TXT  | Name _dmarc | Data v=DMARC1...
✅ Type CNAME| Name _domainconnect | Data _domainconnect.gd...
✅ Type CNAME| Name pay | Data paylinks.commerce... (optional)
```

## 🚨 URGENT: Delete ONLY the "WebsiteBuilder Site" A record!

That's the one causing the conflict. Everything else looks perfect!
