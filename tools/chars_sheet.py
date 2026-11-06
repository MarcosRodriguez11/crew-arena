from PIL import Image, ImageDraw
import os

base = r'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\tiles\chars\Puny-Characters'
chars = ['Character-Base','Archer-Green','Archer-Purple','Mage-Cyan','Mage-Red',
         'Soldier-Blue','Soldier-Red','Soldier-Yellow','Warrior-Blue','Warrior-Red','Slime']

# Cada hoja de personaje: frames de 32x32. El frame (col0,row0) es idle frente.
scale = 4
cell = 32 * scale
pad = 18
sheet = Image.new('RGBA', (len(chars)*(cell+4), cell+pad+4), (30,34,44,255))
draw = ImageDraw.Draw(sheet)

for i, name in enumerate(chars):
    p = os.path.join(base, name + '.png')
    if not os.path.exists(p):
        continue
    im = Image.open(p).convert('RGBA')
    # tomamos el primer frame 32x32 (arriba-izquierda)
    fw = 32 if im.width >= 32 else im.width
    fh = 32 if im.height >= 32 else im.height
    frame = im.crop((0,0,fw,fh)).resize((cell,cell), Image.NEAREST)
    x = i*(cell+4)
    sheet.paste(frame, (x, pad), frame)
    draw.text((x+2, 2), name.replace('-','\n'), fill=(255,230,120,255))

out = os.path.join(r'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\tiles', 'chars_sheet.png')
sheet.save(out)
print('SHEET', out, sheet.size)
