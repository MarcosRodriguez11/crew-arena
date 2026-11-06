from PIL import Image
import os, shutil

chars = r'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\tiles\chars\Puny-Characters'
out = r'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\mapa'
os.makedirs(out, exist_ok=True)

def first_frame(src, dst, size=32):
    im = Image.open(src).convert('RGBA')
    fw = min(size, im.width); fh = min(size, im.height)
    frame = im.crop((0, 0, fw, fh))
    # recorta el espacio transparente sobrante para que el sprite llene el nodo
    bbox = frame.getbbox()
    if bbox:
        frame = frame.crop(bbox)
    frame.save(dst)
    return frame.size

p = first_frame(os.path.join(chars, 'Character-Base.png'), os.path.join(out, 'jugador.png'))
t = first_frame(os.path.join(chars, 'Soldier-Blue.png'),  os.path.join(out, 'entrenador.png'))

# hierba: el tile Grass2 del pack de entorno
g = os.path.join(chars, 'Environment', 'Grass2.png')
shutil.copy(g, os.path.join(out, 'hierba.png'))
gs = Image.open(g).size

print('jugador', p, 'entrenador', t, 'hierba', gs)
print('FILES', os.listdir(out))
