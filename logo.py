import drawsvg as draw
import numpy as np
import random

D = draw.Drawing(500, 500, origin='center')

num_points = 6 
radius_base = 150
points = []

for i in range(num_points):
    angle = (i / num_points) * 2 * np.pi
    r = radius_base * np.random.uniform(0.6, 1.3)
    x = r * np.cos(angle)
    y = r * np.sin(angle)
    points.append((x, y))

path_data = f"M {points[0][0]},{points[0][1]} "
for i in range(1, num_points):
    p1 = points[i]
    p2 = points[(i + 1) % num_points]
    mid_x, mid_y = (p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2
    path_data += f"Q {p1[0]},{p1[1]} {mid_x},{mid_y} "
path_data += "Z"

path = draw.Path(d=path_data, fill='url(#logo-grad)', stroke='none')

gradient = draw.LinearGradient(-200, -200, 200, 200, id='logo-grad')
gradient.add_stop(0, '#355872') # Bright Blue
gradient.add_stop(1, '#92FE9D') # Neon Green
D.append(gradient)

D.append(path)
D.save_svg('logo.svg')