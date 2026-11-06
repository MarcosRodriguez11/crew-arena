from PIL import Image, ImageDraw
import os

base = r'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\tiles'
src = Image.open(os.path.join(base, 'punyworld.png')).convert('RGBA')
T = 16
cols, rows = src.width // T, src.height // T

def analyze(c, r):
    tile = src.crop((c*T, r*T, c*T+T, r*T+T))
    px = tile.load()
    nonempty = 0; greens = 0; browns = 0; bright = 0
    for y in range(T):
        for x in range(T):
            rr, gg, bb, aa = px[x, y]
            if aa < 40:
                continue
            nonempty += 1
            if gg > rr + 20 and gg > bb + 10:
                greens += 1
            if rr > 90 and gg > 60 and bb < 90 and abs(rr-gg) < 70 and rr > bb:
                browns += 1
            if rr > 180 and gg > 180:
                bright += 1
    return nonempty, greens, browns, bright, tile

# candidatos hierba: mucho verde, cobertura media (matojo, no suelo liso)
grass = []
# candidatos objeto: tile pequeño/aislado con marron o color vivo, rodeado de vacio
obj = []
for r in range(rows):
    for c in range(cols):
        ne, g, br, bt, tile = analyze(c, r)
        if ne == 0:
            continue
        cover = ne / (T*T)
        if g >= 40 and 0.35 < cover < 0.95:
            grass.append((g, c, r, tile))
        if (br >= 25 or bt >= 20) and 0.25 < cover < 0.85:
            obj.append((br + bt, c, r, tile))

grass.sort(reverse=True); obj.sort(reverse=True)
grass = grass[:16]; obj = obj[:16]

def strip(items, name):
    scale = 4; cell = T*scale; pad = 16
    sheet = Image.new('RGBA', (len(items)*(cell+4), cell+pad+4), (30,34,44,255))
    d = ImageDraw.Draw(sheet)
    for i,(score,c,r,tile) in enumerate(items):
        t = tile.resize((cell,cell), Image.NEAREST)
        x = i*(cell+4)
        sheet.paste(t,(x,pad),t)
        d.text((x+1,1), f'{c},{r}', fill=(255,230,120,255))
    out = os.path.join(base, name)
    sheet.save(out)
    return out, [(c,r) for _,c,r,_ in items]

go, gl = strip(grass, 'cand_grass.png')
oo, ol = strip(obj, 'cand_obj.png')
print('GRASS', go, gl)
print('OBJ', oo, ol)
