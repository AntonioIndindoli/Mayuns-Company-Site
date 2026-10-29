# Mayunaise jar label

Current design: warm butter-yellow background, thin navy-blue top and bottom edges, navy serif Mayunaise wordmark with a curled M, and a gold sweeping underline matching the user's supplied reference.

Created the new background with built-in imagegen and composited the reference artwork at a size suited to the existing jar UVs. Preserved atlas transparency and corrected vertical orientation. Both source and build GLBs embed the final texture, with other model buffers unchanged. The preview is rendered from the actual GLB using Blender; lighting differs from the website.

Saved texture: public/models/mayunaise-label.png
Saved model: public/models/home_logo.glb
Preview: output/mayunaise-jar-preview.png

Final imagegen prompt:

Edit target: supplied flat square jar-label texture atlas. Create a BACKGROUND-ONLY version so the original printed details and a separate supplied wordmark can be composited back on. Remove all lettering, logo, dot, nutrition panel, barcode and text without leaving ghost marks. Change the champagne-tan label to a distinctly MORE YELLOW warm butter-yellow paper, approximately #F5D969. It must clearly read yellow rather than cream, gray, beige or tan, while staying tasteful and matte. Use very subtle fine paper grain, smooth and clean, no stains or dark flecks. Preserve the two thin navy-blue lines at the TOP and BOTTOM edges. Exact square layout on a 1024px canvas: full-width label strip y=194..428, blue edge stripes approximately y=194..201 and y=422..428. Preserve transparency above and below. Do not move, rotate, or alter the strip proportions. No added text, shapes, gradients, metallic effects, highlights, shadows or objects. Output only the blank yellow paper backing with blue edge stripes, not a jar render.
