---
title: Untitled

---

import os
import random
from PIL import Image, ImageEnhance, ImageOps, ImageChops, ImageFilter

def random_color_overlay(img):
    color = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))
    overlay = Image.new('RGBA', img.size, color)
    img = Image.alpha_composite(img, overlay)
    return img

def blend_modes(img1, img2):
    blend_mode = random.choice([
        ImageChops.add,
        ImageChops.darker,
        ImageChops.lighter,
        ImageChops.multiply,
        ImageChops.screen
    ])
    return blend_mode(img1, img2)

def process_images(input_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for file in os.listdir(input_folder):
        if file.endswith('.png'):
            img_path = os.path.join(input_folder, file)
            img = Image.open(img_path).convert('RGBA')
            
            # Create planes
            img_planes = ImageOps.colorize(img, '#000000', '#ffffff')
            # Apply random color overlay
            img_overlay = random_color_overlay(img_planes)
            # Blend original image with the overlay using a random blend mode
            img_result = blend_modes(img, img_overlay)
            
            output_path = os.path.join(output_folder, f'processed_{file}')
            img_result.save(output_path)

if __name__ == '__main__':
    input_folder = 'input_images'
    output_folder = 'output_images'
    process_images(input_folder, output_folder)
