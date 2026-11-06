import sys
p = r'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\tiles\punyworld.png'
try:
    from PIL import Image
    im = Image.open(p)
    print("PILLOW_OK", im.size, im.mode)
except Exception as e:
    print("NO_PILLOW", repr(e))
    # fallback: read PNG header for width/height
    import struct
    with open(p, 'rb') as f:
        data = f.read(33)
    if data[:8] == b'\x89PNG\r\n\x1a\n':
        w, h = struct.unpack('>II', data[16:24])
        print("HEADER_SIZE", w, h)
