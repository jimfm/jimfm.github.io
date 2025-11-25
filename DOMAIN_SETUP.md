# Setting Up a Custom Domain with GitHub Pages

Follow these steps to point your custom domain to your GitHub Pages site.

## Option 1: Using Apex Domain (example.com)

### Step 1: Get Your GitHub Pages IP Address
GitHub Pages uses these IP addresses for apex domains:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### Step 2: Update DNS Records
Go to your domain registrar (GoDaddy, Namecheap, Route 53, etc.) and:

1. **Add A records** pointing to GitHub's IP addresses:
   - Host: `@` (or leave blank)
   - Type: `A`
   - Value: `185.199.108.153`
   
   Repeat for the other three IPs if your registrar supports multiple A records.

2. **Add an AAAA record** (for IPv6 - optional but recommended):
   - Host: `@` (or leave blank)
   - Type: `AAAA`
   - Value: `2606:50c0:8000::153`

### Step 3: Create CNAME File
Create a file named `CNAME` in your repository root:
```
example.com
```

Commit and push:
```bash
echo "example.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

### Step 4: Configure in GitHub
1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Custom domain", enter your domain: `example.com`
4. Check "Enforce HTTPS" (once domain is verified)
5. Click "Save"

---

## Option 2: Using Subdomain (www.example.com)

### Step 1: Update DNS Records
Go to your domain registrar and:

1. **Add a CNAME record**:
   - Host: `www`
   - Type: `CNAME`
   - Value: `username.github.io` (replace `username` with your GitHub username)

### Step 2: Create CNAME File
Create a `CNAME` file in your repository root:
```
www.example.com
```

Commit and push:
```bash
echo "www.example.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

### Step 3: Configure in GitHub
1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Custom domain", enter your domain: `www.example.com`
4. Check "Enforce HTTPS"
5. Click "Save"

---

## Verification and Troubleshooting

### Check DNS Propagation
Use these tools to verify your DNS is configured:
- [DNS Checker](https://dnschecker.org/)
- Command line: `dig example.com` or `nslookup example.com`

### DNS Propagation Times
DNS changes can take:
- **Immediate** to a few minutes with some registrars
- **Up to 48 hours** in worst cases
- Usually 15-30 minutes

### HTTPS Certificate
After DNS is set up:
1. GitHub automatically generates an SSL certificate (usually takes 30-60 minutes)
2. Once ready, enable "Enforce HTTPS" in repository settings
3. Your site will be accessible over HTTPS

### Troubleshooting
If your site doesn't appear:
1. ✅ Verify `CNAME` file exists in repository root
2. ✅ Check DNS records are correct with `dig` or online DNS checker
3. ✅ Wait for DNS propagation (may take 24-48 hours)
4. ✅ Check repository "Pages" settings show your domain
5. ✅ Ensure HTTPS isn't enforced until certificate is ready
6. ✅ Clear browser cache and try incognito/private window

---

## Recommended Setup: Apex + www

For best practice, set up both apex and www domains:

1. **DNS Records**:
   - Add A records to apex domain (`example.com`)
   - Add CNAME to www: `www` → `username.github.io`

2. **CNAME File**: Use apex domain
   ```
   example.com
   ```

3. **GitHub Settings**: Set to apex domain (`example.com`)
   - Visitors to `www.example.com` will redirect to `example.com`

---

## Resources
- [GitHub Pages Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Configuration Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
