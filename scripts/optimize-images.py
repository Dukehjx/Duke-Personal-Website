"""Create responsive local WebP derivatives; keep original photographs untouched."""
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1] / 'public'
for source in sorted(root.rglob('*')):
    if source.suffix.lower() not in ('.jpg', '.jpeg', '.png'):
        continue
    with Image.open(source) as original:
        original = ImageOps.exif_transpose(original).convert('RGB')
        for width in (480, 960):
            resized = original.copy()
            resized.thumbnail((width, width * 2))
            resized.save(source.with_name(f'{source.stem}-{width}.webp'), 'WEBP', quality=80, method=6)
print('Created 480px and 960px WebP variants.')
