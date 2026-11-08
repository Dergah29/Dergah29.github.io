"""Build adventure assets from existing CC0 pack, project animation metadata and original music."""
from pathlib import Path
import json,shutil,math,wave,struct
base=Path(__file__).resolve().parent;v3=base.parent
pack=v3/'vendor/treasure-hunters/Treasure Hunters';out=base/'assets'
out.mkdir(exist_ok=True)
files={'tiles.png':pack/'Pirate Ship/Sprites/Tilesets/Terrain and Back Wall (32x32).png','platforms.png':pack/'Pirate Ship/Sprites/Tilesets/Platforms (32x32).png','barrel.png':pack/'Pirate Ship/Sprites/Decorations/Barrels and Bottles/01.png','spikes.png':pack/'Palm Tree Island/Sprites/Objects/Spikes/Spikes.png'}
for i,f in enumerate(sorted((pack/'Pirate Treasure/Sprites/Gold Coin').glob('*.png'))):files[f'coin{i}.png']=f
for i,f in enumerate(sorted((pack/'Palm Tree Island/Sprites/Objects/Chest').glob('Chest Open *.png'))):files[f'chest{i}.png']=f
for i,f in enumerate(sorted((pack/'Palm Tree Island/Sprites/Objects/Flag').glob('Flag [0-9]*.png'))):files[f'flag{i}.png']=f
from PIL import Image
for n,f in files.items():
 if n.startswith('chest'):
  im=Image.open(f).convert('RGBA');im.crop((16,0,48,35)).save(out/n)
 elif n.startswith('coin'):
  im=Image.open(f).convert('RGBA');im.crop(im.getbbox()).save(out/n)
 else:shutil.copy2(f,out/n)
project=v3/'project/Platform Fighter Template GDevelop project/Platform Fighter Template.json'
d=json.loads(project.read_text());scene=next(l for l in d['layouts'] if l['name']=='Game');objects={o['name']:o for o in scene['objects']}
data={}
for skin,obj in [('sailor','Player1BluePirate'),('captain','CaptainAppearance'),('shark','SharkAppearance'),('crab','CrabAppearance'),('enemy','Player1RedPirate')]:
 data[skin]={a['name']:{'frames':[s['image'].replace('\\','/').split('/')[-1] for s in a['directions'][0]['sprites']],'time':a['directions'][0]['timeBetweenFrames']} for a in objects[obj]['animations']}
exec((base/'prepare-enemies.py').read_text())
(out/'animations.json').write_text(json.dumps(data))
# Original 6/8-inspired D-minor adventure/boss motifs, synthesized locally.
# No commercial recording or downloaded melody used.
sr=22050;length=24
for name,tempo,notes in [('voyage',120,[62,69,65,64,62,60,57,60,62,65,69,72,70,69,65,64]),('boss',144,[50,50,57,53,50,58,57,53,48,48,55,52,45,52,57,56])]:
 samples=[0.0]*(sr*length);beat=60/tempo
 def tone(midi,start,duration,gain,bass=False):
  freq=440*2**((midi-69)/12)
  for j in range(int(duration*sr)):
   k=int(start*sr)+j
   if k>=len(samples):break
   t=j/sr;env=min(1,t/.012)*max(0,1-t/duration)**1.4
   v=math.sin(2*math.pi*freq*t)+.23*math.sin(4*math.pi*freq*t)+.1*math.sin(6*math.pi*freq*t)
   samples[k]+=gain*env*v
 for step in range(int(length/beat)*2):
  t=step*beat/2;tone(notes[step%len(notes)]+(12 if name=='boss' else 0),t,beat*.8,.095)
  if step%2==0:tone([38,38,46,45][(step//8)%4],t,beat*.7,.12,True)
  if step%6==0:
   for note in [50,53,57]:tone(note,t,beat*1.7,.035)
  # gentle hand-drum pulse, deterministic tone/no random noise.
  if step%2==0:tone(31,t,.11,.13)
 with wave.open(str(out/(name+'.wav')),'wb') as w:
  w.setnchannels(1);w.setsampwidth(2);w.setframerate(sr);w.writeframes(b''.join(struct.pack('<h',int(math.tanh(s)*24000)) for s in samples))
print('Adventure assets: existing coin/chest/flag/tile sprites + animation manifest + two original music loops')
