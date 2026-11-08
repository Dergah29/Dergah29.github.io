# Called in project builder: native boss duel art and visual-only Captain variant.
import copy
from PIL import Image
layout=next(l for l in d['layouts'] if l['name']=='Game')
adir=base/'adventure/assets'
bg=Image.open(adir/'ship.webp').convert('RGBA').resize((640,360))
dock=Image.open(adir/'dock.webp').convert('RGBA')
# Art contact lines exactly match arena-art.js native ship platforms.
for x,y,w,h in [(0,232,640,128),(0,164,144,68),(496,164,144,68)]:
 section=dock.resize((w,max(h,int(w*dock.height/dock.width))))
 bg.alpha_composite(section,(x,y))
chest=Image.open(base/'vendor/treasure-hunters/Treasure Hunters/Palm Tree Island/Sprites/Objects/Chest/Chest Open 01.png').convert('RGBA');chest=chest.crop((16,0,48,35));chest.thumbnail((35,24));bg.alpha_composite(chest,(595,232-chest.height))
folder=p.parent/'assets/Adventure';folder.mkdir(exist_ok=True,parents=True);bg.resize((1672,941)).save(folder/'AdventureBoss.png')
d['resources']['resources'].append({'name':'AdventureBoss.png','file':'assets/Adventure/AdventureBoss.png','kind':'image','smoothed':False,'userAdded':True})
back=next(o for o in layout['objects'] if o['name']=='ArenaBackdrop');anim=copy.deepcopy(back['animations'][0]);anim['name']='adventureBoss';anim['directions'][0]['sprites'][0]['image']='AdventureBoss.png';back['animations'].append(anim)
boss=copy.deepcopy(next(o for o in layout['objects'] if o['name']=='CaptainAppearance'));boss['name']='AdventureBossAppearance'
res={r['name']:r['file'] for r in d['resources']['resources']}
for anim in boss['animations']:
 for direction in anim['directions']:
  for sprite in direction['sprites']:
   name='Boss_'+sprite['image'];im=Image.open(p.parent/res[sprite['image']]).convert('RGBA')
   palette={(166,39,49):(28,35,49),(94,24,40):(15,20,32),(224,174,67):(186,101,66)}
   im.putdata([(*palette.get(px[:3],px[:3]),px[3]) for px in im.getdata()]);im.save(folder/name);sprite['image']=name
   d['resources']['resources'].append({'name':name,'file':'assets/Adventure/'+name,'kind':'image','smoothed':False,'userAdded':True})
layout['objects'].append(boss)
