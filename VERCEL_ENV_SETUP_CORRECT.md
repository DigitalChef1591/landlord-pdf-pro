# 🔧 Vercel Environment Variables - Correct Setup

## ❌ Common Mistake
You have the Key and Value fields swapped! The error occurs because Vercel expects the environment variable **name** in the Key field, not the URL.

## ✅ Correct Format

### In Vercel Dashboard → Project Settings → Environment Variables:

**Environment Variable 1:**
- **Key**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://gaammugfiniqgqswwkcn.supabase.co`

**Environment Variable 2:**
- **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `your_supabase_anon_key_here`

**Environment Variable 3:**
- **Key**: `SUPABASE_SERVICE_ROLE_KEY`
- **Value**: `your_supabase_service_role_key_here`

## 📋 Step-by-Step Fix

1. **Clear the current incorrect entry**
2. **Add new environment variable:**
   - Click "Add Another" or the "+" button
   - In the **Key** field, type: `NEXT_PUBLIC_SUPABASE_URL`
   - In the **Value** field, paste: `https://gaammugfiniqgqswwkcn.supabase.co`
   - Select environments: Production, Preview, Development
   - Click "Save"

3. **Add the anon key:**
   - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: Your Supabase anon key (starts with `eyJ...`)

4. **Add the service role key:**
   - **Key**: `SUPABASE_SERVICE_ROLE_KEY`
   - **Value**: Your Supabase service role key (starts with `eyJ...`)

## 🔍 Where to Find Your Supabase Keys

1. Go to your Supabase project dashboard
2. Click on "Settings" in the sidebar
3. Click on "API" 
4. You'll see:
   - **Project URL**: `https://gaammugfiniqgqswwkcn.supabase.co`
   - **anon/public key**: `eyJ...` (use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - **service_role key**: `eyJ...` (use for `SUPABASE_SERVICE_ROLE_KEY`)

## ⚠️ Important Notes

- **Key** = Environment variable name (like `NEXT_PUBLIC_SUPABASE_URL`)
- **Value** = The actual URL or key value
- Environment variable names can only contain letters, digits, and underscores
- They cannot start with a digit
- They are case-sensitive

## 🚀 After Adding All Variables

Once you've added all three Supabase environment variables correctly:
1. Vercel will automatically redeploy your app
2. The app should work with full Supabase functionality
3. You can then add Stripe environment variables using the same format

---

**Remember**: Key = Variable Name, Value = Variable Content
