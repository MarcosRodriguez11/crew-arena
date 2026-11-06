from PIL import Image
import os

base = r'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\tiles'
out  = r'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\mapa'
src = Image.open(os.path.join(base, 'punyworld.png')).convert('RGBA')
T = 16

def tile(c, r):
    return src.crop((c*T, r*T, c*T+T, r*T+T))

def stats(t):
    px = t.load(); ne=g=br=0; ys=[]
    for y in range(T):
        for x in range(T):
            rr,gg,bb,aa = px[x,y]
            if aa<40: continue
            ne+=1; ys.append(y)
            if gg>rr+20 and gg>bb+10: g+=1
            if rr>90 and gg>55 and bb<95 and rr>=gg-10 and rr>bb: br+=1
    cover = ne/(T*T)
    return ne,g,br,cover

# --- Matojo: candidato con mucho verde y cobertura tipo arbusto (0.5-0.85) ---
grass_cands = [(7,7),(6,7),(7,9),(6,9),(16,7),(15,7),(4,33)]
best_g=None
for c,r in grass_cands:
    ne,g,br,cov = stats(tile(c,r))
    score = g - abs(cov-0.7)*60   # prefiere verde y cobertura ~0.7 (matojo)
    if best_g is None or score>best_g[0]:
        best_g=(score,c,r,cov,g)

# --- Cofre: candidato con marron en forma de caja (cobertura 0.4-0.75, base ancha) ---
obj_cands = [(15,4),(14,4),(13,5),(11,5),(12,4),(13,7),(10,7),(4,26)]
best_o=None
for c,r in obj_cands:
    ne,g,br,cov = stats(tile(c,r))
    score = br - abs(cov-0.55)*60
    if best_o is None or score>best_o[0]:
        best_o=(score,c,r,cov,br)

def save(c,r,name):
    t = tile(c,r)
    bbox = t.getbbox()
    if bbox: t = t.crop(bbox)
    t.save(os.path.join(out, name))

save(best_g[1], best_g[2], 'hierba.png')
save(best_o[1], best_o[2], 'objeto.png')
print('GRASS pick', best_g[1:], '-> hierba.png')
print('OBJ   pick', best_o[1:], '-> objeto.png')
