from PIL import Image, ImageDraw
import os

base = r'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\tiles'
src = Image.open(os.path.join(base, 'punyworld.png')).convert('RGBA')
T = 16
cols = src.width // T   # 27
rows = src.height // T  # 65

# Hoja de contactos: cada tile escalado x3, con su indice (col,row) encima.
scale = 3
cell = T * scale
pad = 14  # espacio para el numero
sheet_cols = cols
sheet = Image.new('RGBA', (sheet_cols * (cell + 2), rows * (cell + pad + 2)), (30, 34, 44, 255))
draw = ImageDraw.Draw(sheet)

for r in range(rows):
    for c in range(cols):
        tile = src.crop((c*T, r*T, c*T+T, r*T+T)).resize((cell, cell), Image.NEAREST)
        x = c * (cell + 2)
        y = r * (cell + pad + 2)
        sheet.paste(tile, (x, y + pad), tile)
        draw.text((x + 1, y + 1), f'{c},{r}', fill=(255, 230, 120, 255))

out = os.path.join(base, 'contact_sheet.png')
sheet.save(out)
print('SHEET', out, sheet.size, 'cols', cols, 'rows', rows)
