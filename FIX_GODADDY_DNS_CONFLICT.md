# 🚨 FIX: GoDaddy DNS Conflict - "www conflicts with another record"

## The Problem
You're seeing: **"Record name www conflicts with another record"**

This means GoDaddy already has a www record that needs to be deleted first.

## 🔧 SOLUTION (5 minutes)

### Step 1: Delete Existing WWW Record
1. In your GoDaddy DNS management page
2. Look for an existing record with **Name: www**
3. It might be:
   - CNAME pointing to something else
   - A record with an IP
   - Forwarding record
4. **DELETE** that existing www record
5. Click **Save** or **Delete**

### Step 2: Delete Any Conflicting Records
Also delete any records that might conflict:
- **A records** pointing to @ (root domain)
- **CNAME records** for @ 
- **Forwarding/Redirect** records
- **Parked domain** records

### Step 3: Add the Correct Records
Now add these two records:

**Record 1:**
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: `76.76.19.61`
- **TTL**: 600

**Record 2:**
- **Type**: CNAME  
- **Name**: www
- **Value**: `cname.vercel-dns.com`
- **TTL**: 600

### Step 4: Save & Test
1. Click **Save** in GoDaddy
2. Wait 10-30 minutes
3. Test: `https://landlordpdfpro.net`

## 🎯 What Your DNS Should Look Like After:

```
Type    Name    Value
A       @       76.76.19.61
CNAME   www     cname.vercel-dns.com
```

## 🚨 URGENT STEPS RIGHT NOW:

1. **DELETE** the existing www record in GoDaddy
2. **DELETE** any other conflicting records
3. **ADD** the two records above
4. **SAVE** changes
5. **WAIT** 10-30 minutes
6. **TEST** your domain

## 🔧 If Still Having Issues:

### Option 1: Use Different Record Types
Instead of CNAME for www, try:
- **Type**: A
- **Name**: www  
- **Value**: `76.76.19.61`

### Option 2: Contact GoDaddy Support
If you can't delete the conflicting record, contact GoDaddy support to remove it.

### Option 3: Use Vercel Nameservers (Advanced)
Change your nameservers to Vercel's (this gives Vercel full DNS control).

---

**The key is deleting the existing www record first, then adding the new ones!**
