# PWA Icons

This directory should contain the following icon files for the Progressive Web App (PWA):

1. `pwa-192x192.png` - A 192x192 pixel PNG icon for the PWA
2. `pwa-512x512.png` - A 512x512 pixel PNG icon for the PWA
3. `apple-touch-icon.png` - A 180x180 pixel PNG icon for iOS devices

You can create these icons using any image editing software like Photoshop, GIMP, or online tools like [Favicon Generator](https://realfavicongenerator.net/).

## Icon Requirements

- All icons should be square
- Icons should have a transparent background if possible
- Icons should be simple and recognizable at small sizes
- The apple-touch-icon.png should not have transparency (use a solid background color)

## Example

Here's an example of how to create these icons using the command line with ImageMagick:

```bash
# Create a 192x192 icon
convert -size 192x192 xc:transparent -fill "#4F46E5" -draw "circle 96,96 96,20" pwa-192x192.png

# Create a 512x512 icon
convert -size 512x512 xc:transparent -fill "#4F46E5" -draw "circle 256,256 256,50" pwa-512x512.png

# Create an apple-touch-icon
convert -size 180x180 xc:"#FFFFFF" -fill "#4F46E5" -draw "circle 90,90 90,20" apple-touch-icon.png
```

Replace these with your actual app icons for production use.