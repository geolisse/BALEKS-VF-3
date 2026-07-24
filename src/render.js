import sharp from 'sharp';
import { GAME, SLOT_DEFS } from './config.js';
import { getBase, getDefaultLocation, getItem } from './catalog.js';

const canvas=GAME.canvasSize, size=Math.round(canvas*GAME.petScale), offset=Math.round((canvas-size)/2);
async function layer(item){ return sharp(item.assetPath).resize(size,size,{fit:'fill'}).png().toBuffer(); }
export async function renderPet(pet, preview={}){
  const loc=getItem(preview.lieu??pet.location_id)??getDefaultLocation();
  const ids=[];
  const base=getBase(pet.species_id); if(base)ids.push(base.id);
  for(const def of SLOT_DEFS[pet.species_id]??[]){ const value=Object.hasOwn(preview,def.id)?preview[def.id]:pet[def.column]; if(value&&value!==base?.id)ids.push(value); }
  const comps=[]; for(const id of ids){const item=getItem(id);if(item)comps.push({input:await layer(item),left:offset,top:offset});}
  return sharp(loc.assetPath).resize(canvas,canvas,{fit:'cover'}).composite(comps).png({compressionLevel:9}).toBuffer();
}
export async function renderPreview(species,item){ const base=getBase(species); const fake={species_id:species,location_id:getDefaultLocation()?.id,outfit_id:base?.id,head_id:null,face_id:null,accessory_1_id:null,accessory_2_id:null}; return renderPet(fake,{[item.slot]:item.id}); }
