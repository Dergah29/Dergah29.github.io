"""Reuse unmodified non-playable CC0 creature frames; run in prepare-assets globals."""
families={
 'npcStar':('The Crusty Crew/Sprites/Pink Star',{'Idle':'01-Idle','Move':'02-Run','Jump':'03-Jump','Fall':'04-Fall','AttackA':'07-Attack','Hurt':'08-Hit'}),
 'npcShell':('Shooter Traps/Sprites/Seashell',{'Idle':'Seashell Idle','Move':'Seashell Idle','Jump':'Seashell Idle','Fall':'Seashell Idle','AttackA':'Seashell Fire','Hurt':'Seashell Hit'})}
for skin,(folder,states) in families.items():
 data[skin]={}
 for state,subdir in states.items():
  frames=[]
  for i,source in enumerate(sorted((pack/folder/subdir).glob('*.png'))):
   name=f'{skin}-{state}-{i}.png';target=out/'enemies'/name
   target.parent.mkdir(exist_ok=True);shutil.copyfile(source,target)
   frames.append('adventure/assets/enemies/'+name)
  if not frames:raise RuntimeError(f'Missing enemy frames: {skin}/{state}')
  data[skin][state]={'frames':frames,'time':.1}
