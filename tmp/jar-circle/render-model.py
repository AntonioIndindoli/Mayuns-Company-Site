import bpy
from mathutils import Vector
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=r'C:\Users\gotde\Desktop\Mayuns.com\public\models\home_logo.glb')
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 32
scene.cycles.use_denoising = True
scene.render.resolution_x = scene.render.resolution_y = 640
scene.render.resolution_percentage = 100
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_mode = 'RGBA'
scene.render.film_transparent = True
scene.view_settings.view_transform = 'AgX'
scene.world = bpy.data.worlds.new('Studio')
scene.world.use_nodes = True
scene.world.node_tree.nodes['Background'].inputs[0].default_value = (0.65,0.72,0.85,1)
scene.world.node_tree.nodes['Background'].inputs[1].default_value = 0.45
def aim(obj, target):
    obj.rotation_euler = (Vector(target)-obj.location).to_track_quat('-Z','Y').to_euler()
for name, location, energy, size in [('Key',(-3,-5,7),550,5),('Fill',(4,-3,4),250,4),('Rim',(2,3,5),350,3)]:
    data = bpy.data.lights.new(name,'AREA')
    data.energy, data.size, data.shape = energy, size, 'DISK'
    obj = bpy.data.objects.new(name,data)
    scene.collection.objects.link(obj)
    obj.location = location
    aim(obj,(0,0,1.8))
data = bpy.data.cameras.new('Preview')
camera = bpy.data.objects.new('Preview',data)
scene.collection.objects.link(camera)
camera.location = (0,-12,3.7)
aim(camera,(0,0,1.9))
data.type, data.ortho_scale = 'ORTHO',5
scene.camera = camera
scene.use_nodes = True
nodes = scene.node_tree.nodes
nodes.clear()
layer = nodes.new('CompositorNodeRLayers')
over = nodes.new('CompositorNodeAlphaOver')
over.inputs[1].default_value = (0.055,0.18,0.43,1)
composite = nodes.new('CompositorNodeComposite')
scene.node_tree.links.new(layer.outputs['Image'],over.inputs[2])
scene.node_tree.links.new(over.outputs['Image'],composite.inputs['Image'])
scene.render.filepath = r'C:\Users\gotde\Desktop\Mayuns.com\output\mayunaise-jar-preview.png'
bpy.ops.render.render(write_still=True)
