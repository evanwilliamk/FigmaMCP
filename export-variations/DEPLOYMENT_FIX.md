# Vercel Deployment Logo Fix

## Problem
Logos were broken on the deployed Vercel site because the deployment was serving from the wrong root directory.

## Root Cause
- The prototype.html file uses relative paths like `logos/roku.png`
- Vercel was deploying from the project root, not from the `export-variations` directory
- This caused the relative paths to break since the logos folder exists in `export-variations/logos/`

## Solution
Created `vercel.json` configuration file in the `export-variations` directory with:

1. **Rewrites**: Set `/` to serve `prototype.html` as the default page
2. **Public directory**: Implicitly set by deploying from the `export-variations` folder
3. **Cache headers**: Added appropriate caching for static assets

## Files Modified
- Created: `/export-variations/vercel.json`

## Deployment URLs
- Production: https://export-variations.vercel.app
- Preview: https://export-variations-9vofy665f-evans-projects-118299ce.vercel.app

## Verification
The logos should now load correctly because:
- Vercel deploys from the `export-variations` directory (where .vercel folder exists)
- Relative paths like `logos/roku.png` resolve to `export-variations/logos/roku.png`
- All logo files (roku.png, hulu.png, fire.png, apple.png, peacock.png, samsung.png) are present

## Next Steps
If logos are still not loading:
1. Check browser console for 404 errors
2. Verify logo files are being uploaded: `vercel ls --all`
3. Check case sensitivity (logos/ vs Logos/)
4. Clear browser cache and hard refresh (Cmd+Shift+R)

## Date
2026-02-20
