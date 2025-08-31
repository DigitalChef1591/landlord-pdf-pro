# 💻 Where to Run Git Commands - Step by Step

## Where to Type These Commands

You need to run these commands in your **terminal/command prompt** in the **LandLord folder**.

### For Windows (PowerShell):

1. **Open PowerShell**:
   - Press `Windows key + R`
   - Type `powershell`
   - Press Enter

2. **Navigate to your project**:
   ```powershell
   cd C:\LandLord
   ```

3. **Run the git commands**:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/landlord-pdf-pro.git
   git push -u origin main
   ```

### Step-by-Step Breakdown:

#### Step 1: Create GitHub Repository First
1. **Go to github.com**
2. **Click "New repository"** (green button)
3. **Repository name**: `landlord-pdf-pro`
4. **Make it Public**
5. **Don't add README** (we already have files)
6. **Click "Create repository"**
7. **Copy the repository URL** (looks like: `https://github.com/yourusername/landlord-pdf-pro.git`)

#### Step 2: Run Commands in PowerShell
```powershell
# Navigate to your project folder
cd C:\LandLord

# Initialize git (creates .git folder)
git init

# Add all files to git
git add .

# Create first commit
git commit -m "Initial commit"

# Connect to your GitHub repository (use YOUR URL)
git remote add origin https://github.com/yourusername/landlord-pdf-pro.git

# Push code to GitHub
git push -u origin main
```

### If You Get Errors:

**"git is not recognized"**:
- Install Git from git-scm.com
- Restart PowerShell

**"Please tell me who you are"**:
```powershell
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

**"Authentication failed"**:
- Use GitHub Desktop app instead
- Or create Personal Access Token on GitHub

### Alternative: Use GitHub Desktop (Easier)

1. **Download GitHub Desktop** from desktop.github.com
2. **Sign in with GitHub account**
3. **Click "Add an Existing Repository from your Hard Drive"**
4. **Choose your C:\LandLord folder**
5. **Click "Publish repository"**
6. **Make it public**
7. **Click "Publish"**

## After Pushing to GitHub:

1. **Go back to Vercel**
2. **Click "Import" next to your repository**
3. **Set Root Directory to `apps/web`**
4. **Click Deploy**

**That's it! Your code will be on GitHub and deployed to Vercel! 🎉**
