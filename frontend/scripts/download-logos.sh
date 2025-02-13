#!/bin/bash

# Create sponsors directory if it doesn't exist
mkdir -p public/images/sponsors

# Download placeholder logos for each sponsor
curl "https://placehold.co/400x200/1a1a2e/ffffff?text=FAST" -o "public/images/sponsors/fast.png"
curl "https://placehold.co/400x200/1a1a2e/ffffff?text=UGIS" -o "public/images/sponsors/ugis.png"
curl "https://placehold.co/400x200/1a1a2e/ffffff?text=Ethosjob" -o "public/images/sponsors/ethosjob.png"
curl "https://placehold.co/400x200/1a1a2e/ffffff?text=Ca+Foscari" -o "public/images/sponsors/cafoscari.png"
