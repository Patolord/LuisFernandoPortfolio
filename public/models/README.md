# 3D Model Instructions

## How to Add Your 3D Plane Model

1. **Supported Formats:**

   - `.gltf` or `.glb` (recommended) - GLTF format
   - `.obj` - OBJ format

2. **File Placement:**

   - Place your model file in this directory: `public/models/`
   - Name it `plane.gltf` for GLTF format, or `plane.obj` for OBJ format

3. **Configuration:**
   - Open `src/app/page.tsx`
   - Find the `MODEL_CONFIG` object (around line 28)
   - Adjust settings as needed:

```javascript
const MODEL_CONFIG = {
  // Choose your model type
  useGLTF: true, // Set to false to use OBJ instead

  // File paths (relative to public folder)
  gltfPath: "/models/plane.gltf",
  objPath: "/models/plane.obj",

  // Adjust these values based on your model
  scale: 1, // Model size multiplier
  position: { x: 0, y: 0, z: 0 }, // Initial position offset
  rotation: { x: 0, y: 0, z: 0 }, // Initial rotation offset
};
```

## Model Requirements

- **Size:** Keep file size under 10MB for good loading performance
- **Orientation:** The model should face forward along the positive Z-axis
- **Scale:** Models are automatically scaled, but you may need to adjust the `scale` value
- **Materials:** The loader will apply custom materials, but existing textures are preserved

## Recommended Model Sources

- **Sketchfab** - Free 3D models (make sure they're Creative Commons)
- **TurboSquid** - Professional 3D models
- **CGTrader** - Marketplace for 3D models
- **Poly Haven** - Free high-quality 3D assets

## Fallback Behavior

If no model file is found, the application will use a simple geometric plane made of boxes. This ensures the animation still works while you prepare your 3D model.

## Testing Your Model

1. Add your model file to this directory
2. Update the `MODEL_CONFIG` if needed
3. Refresh the page
4. Check the browser console for loading progress
5. Look for the yellow warning if the model fails to load

## Troubleshooting

- **Model not loading?** Check the file path and format
- **Model too big/small?** Adjust the `scale` value
- **Model facing wrong direction?** Modify the `rotation` values
- **Model in wrong position?** Adjust the `position` values
