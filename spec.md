# Specification

## Summary
**Goal:** Replace the dark-background partner logos image with a light-background version and update the pharmaceutical partners section to use it compactly.

**Planned changes:**
- Edit the existing combined logos image (file_000000009d34720693b8df539e35b6e1.png) to have a clean white or light neutral background instead of the dark/black background, preserving all five logos (Smartway Wellness, AquaLab, Smart Laboratories, Cipla, Laborate Pharmaceuticals India Ltd.) at full visibility
- Save the new image as a static asset in `frontend/public/assets/generated/partner-logos-light.png`
- In `App.tsx`, replace the pharmaceutical partners section content with the new light-background combined logos image
- Set the partners section background to white or a soft light neutral color
- Make the section compact to avoid excessive vertical space

**User-visible outcome:** The pharmaceutical partners section displays all five partner logos in a single combined image on a clean light/white background, taking up minimal vertical space on the page.
